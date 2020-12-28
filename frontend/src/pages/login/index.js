import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Main, Container } from "./styles";

//components
import Navbar from "../components/navbar/index";
import ModalBorder from "../components/modalBorder/index";

import { socket } from "../../configs/socket_export";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [username, setUsername] = useState("");

    const onSubmit = (data) => {
        if (data.username === "") data.username = "Nome não disponivel";
        data.socketid = socket.id;
        console.log(data);
    };

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    return (
        <Main>
            <Navbar />
            <Container>
                <ModalBorder size="96" status="online" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="div-input-login">
                        <p id="login-input-email">Nome de usuario:</p>
                        <input ref={register} name="username" type="text" value={username} onChange={handleChange} />
                    </div>

                    <div id="login-status">
                        <p>Entrar como:</p>
                        <select name="cars" id="cars" ref={register} name="status">
                            <option value="online">Online</option>
                            <option value="busy">Ocupado</option>
                            <option value="away">Ausente</option>
                            <option value="invisible">Offline</option>
                        </select>
                    </div>
                    <div className="checkbox-buttons-login">
                        <input type="checkbox"></input>
                        <p>Lembrar-me</p>
                    </div>

                    <button onClick={() => {}}>Entrar</button>
                </form>
            </Container>
        </Main>
    );
};

export default Login;
