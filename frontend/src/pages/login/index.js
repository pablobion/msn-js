import React from "react";

import { Main, Container } from "./styles";

//components
import Navbar from "../components/navbar/index";

const login = () => {
    return (
        <Main>
            <Navbar />
            <Container>
                <p>Endereço de email:</p>
                <input type="text" />
                <p>Senha:</p>
                <input type="text" />
                <div id="login-status">
                    <p>Entrar como:</p>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                    </select>
                </div>
                <div className="checkbox-buttons-login">
                    <input type="checkbox"></input>
                    <p>Sei la</p>
                </div>
                <div className="checkbox-buttons-login">
                    <input type="checkbox"></input>
                    <p>Sei la</p>
                </div>
                <div className="checkbox-buttons-login">
                    <input type="checkbox"></input>
                    <p>Sei la</p>
                </div>

                <button>Entrar</button>
            </Container>
        </Main>
    );
};

export default login;
