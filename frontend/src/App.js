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
import UploadPhoto from "./pages/uploadPhoto/index";

//context
import { useUser } from "./pages/context/allusers";
import { socket } from "./configs/socket_export";

function App() {
    const { userChats } = useUser();

    const chatRef = useRef([]);
    const multiChatRef = useRef([]);

    useEffect(() => {
        socket.on("send client message text", ({ message, socketidUser, socketidPerson, chatopen }) => {
            if (!chatRef.current) return false;
            const indexPersonChat = chatRef.current.findIndex((elem) => elem.id === socketidPerson);
            const indexUserChat = chatRef.current.findIndex((elem) => elem.id === socketidUser);

            if (chatRef.current[indexUserChat]) chatRef.current[indexUserChat].insertAdjacentHTML("beforeend", `<p id="chat-usarname">${socketidUser} diz:</p><p id="chat-textmessage">${message}</p>`);
            if (chatRef.current[indexPersonChat]) chatRef.current[indexPersonChat].insertAdjacentHTML("beforeend", `<p id="chat-usarname">${socketidUser} diz:</p><p id="chat-textmessage">${message}</p>`);

            if (chatopen === false) {
                const indexPersonMultiChat = multiChatRef.current.findIndex((elem) => `${elem.id}` === `${socketidUser}-multichat`);
                if (chatRef.current[indexPersonMultiChat]) multiChatRef.current[indexPersonMultiChat].style = "background-color: orange;";
            }
        });
    }, []);

    return (
        <Container>
            {/* <Home /> */}
            {/* teste */}
            {/* <Login /> */}
            <UploadPhoto />
            {/* 
            {userChats && userChats.map((elem, index) => <Chat key={elem.socketidperson} ref={(el) => (chatRef.current[index] = el)} socketidperson={elem.socketidperson} visible={elem.visible} />)}

            <div id="multi-chats">{userChats && userChats.map((elem, index) => <MultiChats key={elem.socketidperson} ref={(el) => (multiChatRef.current[index] = el)} socketidperson={elem.socketidperson} />)}</div> */}
            <GlobalStyle />
        </Container>
    );
}

export default App;
