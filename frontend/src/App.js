import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import GlobalStyle from "./styles/global";

//pages
import Home from "./pages/home/index";
import Chat from "./pages/chat/index";

//configs
import { config } from "./configs/config_connections";

function App() {
    useEffect(() => {
        let configs = config();

        const login = (async () => {
            const settings = {
                method: "POST",
                body: JSON.stringify({ name: "pablo" }),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            };
            try {
                const response = await fetch(`http://${configs.ipServer}:3333/`, settings);
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        })();
    });

    return (
        <Container>
            <Home />
            <Chat />
            <GlobalStyle />
        </Container>
    );
}

export default App;
