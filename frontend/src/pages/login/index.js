import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import { Main, Container } from "./styles";

//components
import Navbar from "../components/navbar/index";
import Borderavatar from "../components/modalBorder/index";
import ModalCropUpdate from "../components/modalCropUpdate";
import Crop from "../components/modalCropUpdate/components/crop/index";

//icons
import { BsPencil } from "react-icons/bs";

//configs
import { socket } from "../../configs/socket_export";

//context
import { useUser } from "../context/allusers";

const Login = () => {
    const { register, handleSubmit } = useForm();

    const { getUser } = useUser();
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
        data.rembeber = rememberIsChecked.current.checked;
        data.autologin = autoLoginIsChecked.current.checked;

        sendSocketEmitStatus(data.status); // troca status ao entrar.
        sendSocketEmitUsername(data.username); // troca username ao entrar
        console.log(data);

        //se o input estiver selecionado, irá salvar foto e nome.
        if (data.rembeber) {
            localStorage.setItem("saveUser", { username: data.username });
        }
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

    useEffect(() => {
        (async function () {
            setPerson(await getUser(socket.id));
        })();
    });

    return (
        <Main>
            <Navbar />
            <Container>
                {person ? <Borderavatar avatar={person.avatar} size="96" status={changeStatusBorder} minus="22" top="4px" left="3px"></Borderavatar> : <Borderavatar avatar="https://i.imgur.com/hIbb87P.png" size="64" status="online" minus="22" top="4px" left="3px"></Borderavatar>}

                <div id="chage-photo-button">
                    <ModalCropUpdate id="btn-edit-photo-login" onClick={() => <Crop />}>
                        <BsPencil size={15} color="black" />
                    </ModalCropUpdate>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="div-input-login">
                        <p id="login-input-email">Nome de usuario:</p>
                        <input ref={register} name="username" type="text" value={username} onChange={handleChangeUsername} />
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
                    </div>
                    <div className="checkbox-buttons-login">
                        <input disabled type="checkbox" ref={autoLoginIsChecked}></input>
                        <p>Entrar Automaticamente</p>
                    </div>

                    <button onClick={() => {}}>Entrar</button>
                </form>
            </Container>
        </Main>
    );
};

export default Login;
