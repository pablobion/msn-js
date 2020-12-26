import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import GlobalStyle from "./styles/global";

import { socket } from "./configs/socket_export";

//pages
import Home from "./pages/home/index";
import Chat from "./pages/chat/index";
import Login from "./pages/login/index";

function App() {
    useEffect(() => {
        socket.emit("chat message", "oi");

        socket.on("socketsConnected", (data) => {
            console.log(data);
        });
    }, []);

    return (
        <Container>
            {/* <Home />
            <Chat /> */}
            <Login />
            <GlobalStyle />
        </Container>
    );
}

export default App;
