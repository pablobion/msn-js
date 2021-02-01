import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import ReactLoading from "react-loading";

import { Main, Container } from "./styles";

//components
import Navbar from "../components/navbar/index";
import Borderavatar from "../components/modalBorder/index";
import ModalCropUpdate from "../components/modalCropUpdate";

//icons
import { BsPencil, BsTrash } from "react-icons/bs";

//configs
import { socket } from "../../configs/socket_export";

//context
import { useUser } from "../context/allusers";

const Login = () => {
    const { register, handleSubmit } = useForm();

    const { getUser, setMode } = useUser();
    const [username, setUsername] = useState("");
    const [person, setPerson] = useState();

    const [changeStatusBorder, setChangeStatusBorder] = useState();
    const rememberIsChecked = useRef();
    const autoLoginIsChecked = useRef();

    const sendSocketEmitStatus = (status) => {
        socket.emit("change status user", status);
    };

    const sendSocketEmitUsername = (username) => {
        socket.emit("change username user", username);
    };

    const onSubmit = (data) => {
        if (!data.username || data.username === " ") {
            alert("Você deve colocar o seu nome de usuário.");
            return false;
        }
        if (data.username === "") data.username = "Nome não disponivel";

        data.socketid = socket.id;
        data.remember = rememberIsChecked.current.checked;
        data.autologin = autoLoginIsChecked.current.checked;

        sendSocketEmitStatus(data.status); // troca status ao entrar.
        sendSocketEmitUsername(data.username); // troca username ao entrar

        //se o input estiver selecionado, irá as informações.
        if (data.remember) {
            localStorage.setItem("saveUser", JSON.stringify({ username: data.username, avatar: person.avatar, autologin: autoLoginIsChecked.current.checked }));
        } else {
            //caso nao esteja ele irá remover.
            localStorage.removeItem("saveUser");
        }

        if (JSON.parse(localStorage.getItem("saveUser"))) {
            let avatar = JSON.parse(localStorage.getItem("saveUser")).avatar; // pega o avatar que esta em local storage
            socket.emit("socket connected notification", { avatar }); // faz um emit pro serivdor
        }

        setMode("home"); //muda para home depois que clica.
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
        socket.emit("change avatar", "");
        alert("Informações limpas");
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
        }
    }, []);

    return (
        <Main>
            <Navbar />
            <Container>
                {person ? <Borderavatar avatar={person.avatar} size="96" status={changeStatusBorder} minus="22" top="4px" left="3px"></Borderavatar> : <ReactLoading type="spin" color="black" height={100} width={100} />}

                <ModalCropUpdate className="change-photo-button">
                    <BsPencil size={15} color="black" />
                </ModalCropUpdate>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="div-input-login">
                        <p>Nome de usuario:</p>
                        <input id="login-input-email" ref={register} name="username" type="text" value={username} onChange={handleChangeUsername} />
                    </div>

                    <div id="login-status">
                        <p>Entrar como:</p>
                        <select ref={register} name="status" onChange={(e) => setChangeStatusBorder(e.target.value)}>
                            <option value="online">Selecione</option>
                            <option value="online">Online (Padrão)</option>
                            <option value="busy">Ocupado</option>
                            <option value="away">Ausente</option>
                            <option value="invisible">Offline</option>
                        </select>
                    </div>
                    <div className="checkbox-buttons-login">
                        <input type="checkbox" ref={rememberIsChecked} onChange={handleVerifyRememberInput}></input>
                        <p>Lembrar-me</p>
                        <button type="button" onClick={clearSaveUser}>
                            <BsTrash />
                        </button>
                    </div>
                    <div className="checkbox-buttons-login">
                        <input disabled type="checkbox" ref={autoLoginIsChecked}></input>
                        <p>Entrar Automaticamente</p>
                    </div>
                    <div id="footer-buttons">
                        <button type="submit" onClick={() => {}}>
                            Entrar
                        </button>
                    </div>
                </form>
            </Container>
        </Main>
    );
};

export default Login;
