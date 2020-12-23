import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import GlobalStyle from "./styles/global";

import io from "socket.io-client";

//pages
import Home from "./pages/home/index";
import Chat from "./pages/chat/index";

//configs
import { config } from "./configs/config_connections";

const configs = config();

const socket = io(`http://${configs.ipServer}:${configs.portServer}`);
socket.on("connect", () => console.log("[IO] Connect => A new connection has been established"));

function App() {
    useEffect(() => {
        // socket.emit("chat message", "ss");

        const login = (async () => {
            const settings = {
                method: "POST",
                body: JSON.stringify({ name: "pablo" }),
                mode: "no-cors",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            };
            try {
                const response = await fetch(`http://${configs.ipServer}/`, settings);
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <Container>
            <Home />
            <Chat />
            <GlobalStyle />
        </Container>
    );
}

export default App;
