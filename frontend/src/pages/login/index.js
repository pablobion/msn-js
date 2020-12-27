import React from "react";

import { Main, Container } from "./styles";

//components
import Navbar from "../components/navbar/index";
import ModalBorder from "../components/modalBorder/index";

const login = () => {
    return (
        <Main>
            <Navbar />
            <Container>
                <ModalBorder size="96" status="online" />
                <div className="div-input-login">
                    <p id="login-input-email">Nome de usuario:</p>
                    <input type="text" />
                </div>
                {/* <div className="div-input-login">
                    <p>Senha:</p>
                    <input type="text" />
                </div> */}
                <div id="login-status">
                    <p>Entrar como:</p>
                    <select name="cars" id="cars">
                        <option value="volvo">Online</option>
                        <option value="volvo">Ocupado</option>
                        <option value="volvo">Ausente</option>
                        <option value="volvo">Offline</option>
                    </select>
                </div>
                <div className="checkbox-buttons-login">
                    <input type="checkbox"></input>
                    <p>Lembrar-me</p>
                </div>

                <button>Entrar</button>
            </Container>
        </Main>
    );
};

export default login;
