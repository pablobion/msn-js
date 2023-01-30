import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
//icons
import { BsPencil, BsTrash } from "react-icons/bs";
import ReactLoading from "react-loading";
//configs
import { socket } from "../../configs/socket_export";
//components
import Borderavatar from "../components/modalBorder/index";
import ModalCropUpdate from "../components/modalCropUpdate";
import Navbar from "../components/navbar/index";
//context
import { useUser } from "../context/allusers";
//images
import brasil from "./assets/brazil.svg";
import turkiye from "./assets/turkiye.png";
//gif
import loading from "./assets/login_loading.gif";
import usa from "./assets/united-states.svg";
import { Container, Main } from "./styles";
import languages from "../../configs/languages";

let timetologin;

const Login = () => {
    const { register, handleSubmit } = useForm();

    const { getUser, setMode, language, changeLanguage } = useUser();
    const [username, setUsername] = useState("");
    const [person, setPerson] = useState();
    const [gifLogin, setGifLogin] = useState(false);

    const [changeStatusBorder, setChangeStatusBorder] = useState();

    const rememberIsChecked = useRef();
    const autoLoginIsChecked = useRef();
    const buttonLogin = useRef();

    const sendSocketEmitStatus = (status) => {
        socket.emit("change status user", status);
    };

    const sendSocketEmitUsername = (username) => {
        socket.emit("change username user", username);
    };

    const onSubmit = (data) => {
        setGifLogin(true);
        buttonLogin.current.disabled = true;

        sendSocketEmitUsername(data.username); // troca username ao entrar
        timetologin = setTimeout(() => {
            if (!data.username || data.username === " " || data.username === "") {
                
                alert(languages[language].enter_username);
                buttonLogin.current.disabled = false;
                setGifLogin(false);
                return false;
            }

            sendSocketEmitStatus(data.status); // troca status ao entrar.

            data.socketid = socket.id;
            if (rememberIsChecked.current) data.remember = rememberIsChecked.current.checked;
            if (autoLoginIsChecked.current) data.autologin = autoLoginIsChecked.current.checked;

            //se o input estiver selecionado, irá as informações.
            if (data.remember) {
                localStorage.setItem("saveUser", JSON.stringify({ username: data.username, avatar: person.avatar, autologin: autoLoginIsChecked.current.checked }));
            } else {
                //caso nao esteja ele irá remover.
                localStorage.removeItem("saveUser");
            }

            if (JSON.parse(localStorage.getItem("saveUser"))) {
                let avatar = JSON.parse(localStorage.getItem("saveUser")).avatar; // pega o avatar que esta em local storage
                if (changeStatusBorder !== "invisible") {
                    socket.emit("socket connected notification", { avatar }); // faz um emit pro serivdor
                }
            } else {
                if (changeStatusBorder !== "invisible") {
                    socket.emit("socket connected notification", { avatar: person.avatar }); // faz um emit pro serivdor
                }
            }

            setMode("home"); //muda para home depois que clica.
        }, 3500);
    };

    const handleCancelLogin = () => {
        clearInterval(timetologin);
        setGifLogin(false);
        buttonLogin.current.disabled = false;
    };

    const handleChangeUsername = (e) => {
        //muda o state de username
        setUsername(e.target.value);
    };

    const handleVerifyRememberInput = () => {
        //Função onde verifica se o input de lembrar está ativo, se sim ele deixar clicar para entrar automaticamente.
        if (rememberIsChecked.current.checked) {
            autoLoginIsChecked.current.disabled = false;
        } else {
            autoLoginIsChecked.current.disabled = true;
            autoLoginIsChecked.current.checked = false;
        }
    };

    const clearSaveUser = () => {
        localStorage.removeItem("saveUser");
        setUsername("");
        rememberIsChecked.current.checked = false;
        autoLoginIsChecked.current.checked = false;
        socket.emit("change avatar", "");
        alert( languages[language].info_deleted);
    };

    (async function () {
        setPerson(await getUser(socket.id));
    })();

    useEffect(() => {
        if (localStorage.getItem("saveUser")) {
            let infos = JSON.parse(localStorage.getItem("saveUser"));
            setUsername(infos.username);
            socket.emit("change avatar", infos.avatar);
            rememberIsChecked.current.checked = true;
            autoLoginIsChecked.current.disabled = false;
            autoLoginIsChecked.current.checked = infos.autologin;

            if (autoLoginIsChecked.current.checked === true && person) {
                buttonLogin.current.click();
            }
        }
        if (localStorage.getItem("msn-language")) {
            changeLanguage(localStorage.getItem("msn-language"));
        }
    }, person);

    return (
        <Main>
            <Navbar />
            <Container>
                {person ? <Borderavatar avatar={person.avatar} size="96" status={changeStatusBorder} minus="22" top="4px" left="3px"></Borderavatar> : <ReactLoading type="spin" color="black" height={100} width={100} />}

                <ModalCropUpdate className="change-photo-button">
                    <BsPencil size={15} color="black" />
                </ModalCropUpdate>
                <div id="div-country-flag">
                    <img onClick={() => changeLanguage("br")} className="country-flag" src={brasil} />
                    <img onClick={() => changeLanguage("tr")} className="country-flag" src={turkiye} />
                    <img onClick={() => changeLanguage("en")} className="country-flag" src={usa} />
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="div-input-login">
                        <p>{languages[language].user_name}</p>
                        <input id="login-input-email" ref={register} name="username" type="text" value={username} onChange={handleChangeUsername} />
                    </div>

                    <div id="login-status">
                        <p>{languages[language].sign_as}</p>
                        <select ref={register} name="status" onChange={(e) => setChangeStatusBorder(e.target.value)}>
                            <option value="online">{languages[language].online}</option>
                            <option value="busy">{languages[language].busy}</option>
                            <option value="away">{languages[language].away}</option>
                            <option value="invisible">Offline</option>
                        </select>
                    </div>
                    <div className="checkbox-buttons-login">
                        <input type="checkbox" ref={rememberIsChecked} onChange={handleVerifyRememberInput}></input>
                        <p>{languages[language].remember_me}</p>
                        <button type="button" onClick={clearSaveUser}>
                            <BsTrash />
                        </button>
                    </div>
                    <div className="checkbox-buttons-login">
                        <input disabled type="checkbox" ref={autoLoginIsChecked}></input>
                        <p>{languages[language].sign_auto}</p>
                    </div>
                    <div id="footer-buttons">
                        {person ? (
                            <button ref={buttonLogin} type="submit">
                               {languages[language].sign_in}
                            </button>
                        ) : (
                            <button
                                type="button"
                                ref={buttonLogin}
                                onClick={() => {
                                    alert(languages[language].unable_connect_server);
                                }}
                            >
                                {languages[language].sign_in}
                            </button>
                        )}
                    </div>
                </form>
                {gifLogin && (
                    <div id="div-gif-singin">
                        <small>{languages[language].signing_in}</small>
                        <img src={loading} alt="gif-singin" />
                        <p onClick={handleCancelLogin}>{languages[language].cancel}</p>
                    </div>
                )}
            </Container>
        </Main>
    );
};

export default Login;
