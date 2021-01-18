import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import GlobalStyle from "./styles/global";

//components
import MultiChats from "../src/pages/multiChats/index";

//pages
import Home from "./pages/home/index";
import Chat from "./pages/chat/index";
import Login from "./pages/login/index";

//context
import { useUser } from "./pages/context/allusers";
import { socket } from "./configs/socket_export";

import { sendmessage, drawAttention } from "./scripts/refs";

function App() {
    const { userChats } = useUser();

    const chatRefText = useRef([]);
    const chatRef = useRef([]);
    const multiChatRef = useRef([]);

    useEffect(() => {
        socket.on("send client message text", ({ message, socketidUser, socketidPerson, chatopen }) => {
            sendmessage({ chatRefText, chatRef, multiChatRef, message, socketidUser, socketidPerson, chatopen });
        });

        socket.on("Draw AttenAttention", (data) => {
            drawAttention({ chatRefText, chatRef, multiChatRef, data });
        });
    }, []);

    return (
        <Container>
            <Home />
            {/* <Login /> */}
            {userChats && userChats.map((elem, index) => <Chat key={elem.socketidperson} ref={{ chatRefText: (el) => (chatRefText.current[index] = el), chatRef: (el) => (chatRef.current[index] = el) }} socketidperson={elem.socketidperson} visible={elem.visible} />)}

            <div id="multi-chats">{userChats && userChats.map((elem, index) => <MultiChats key={elem.socketidperson} ref={(el) => (multiChatRef.current[index] = el)} socketidperson={elem.socketidperson} />)}</div>
            <GlobalStyle />
        </Container>
    );
}

export default App;
