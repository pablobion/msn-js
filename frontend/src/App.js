import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import GlobalStyle from "./styles/global";

import { socket } from "./configs/socket_export";

//pages
import Home from "./pages/home/index";
import Chat from "./pages/chat/index";

function App() {
    useEffect(() => {
        socket.emit("chat message", "oi");

        socket.on("socketsConnected", (data) => {
            console.log(data);
        });
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
