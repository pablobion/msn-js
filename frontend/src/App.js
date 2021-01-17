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

function App() {
    const { userChats } = useUser();

    const chatRefText = useRef([]);
    const chatRef = useRef([]);
    const multiChatRef = useRef([]);

    useEffect(() => {
        socket.on("send client message text", ({ message, socketidUser, socketidPerson, chatopen }) => {
            if (!chatRefText.current) return false;
            const indexPersonChat = chatRefText.current.findIndex((elem) => elem.id === socketidPerson);
            const indexUserChat = chatRefText.current.findIndex((elem) => elem.id === socketidUser);

            if (chatRefText.current[indexUserChat]) chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<p id="chat-usarname">${socketidUser} diz:</p><p id="chat-textmessage">${message}</p>`);
            if (chatRefText.current[indexPersonChat]) chatRefText.current[indexPersonChat].insertAdjacentHTML("beforeend", `<p id="chat-usarname">${socketidUser} diz:</p><p id="chat-textmessage">${message}</p>`);

            if (chatopen === false) {
                //verificando se o chat estava aberto, se caso não, deixa ele laranja
                const indexPersonMultiChat = multiChatRef.current.findIndex((elem) => `${elem.id}` === `${socketidUser}-multichat`);
                if (chatRefText.current[indexPersonMultiChat]) multiChatRef.current[indexPersonMultiChat].style = "background-color: orange;";
            }
        });

        socket.on("Draw AttenAttention", (data) => {
            const indexPersonMultiChat = multiChatRef.current.findIndex((elem) => `${elem.id}` === `${data}-multichat`);
            const indexPersonChat = chatRef.current.findIndex((elem) => elem.id === data);

            if (multiChatRef.current[indexPersonMultiChat]) multiChatRef.current[indexPersonMultiChat].style = "background-color: tomato;animation: shake 0.5s;";

            if (chatRef.current[indexPersonChat]) chatRef.current[indexPersonChat].style = "animation: shake 0.5s; top: 100px; left: 100px; z-index: 1";

            setTimeout(() => {
                if (multiChatRef.current[indexPersonMultiChat]) multiChatRef.current[indexPersonMultiChat].style = "background-color: transparent;";
                if (chatRef.current[indexPersonChat]) chatRef.current[indexPersonChat].style = "animation: none; top: 100px; left: 100px;";
            }, 500);
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
