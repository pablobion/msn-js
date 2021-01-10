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

    const itemsRef = useRef([]);

    useEffect(() => {
        socket.on("send client message text", ({ message, socketidUser, socketidPerson }) => {
            const indexperson = itemsRef.current.findIndex((elem) => elem.id === socketidPerson);
            const indexuser = itemsRef.current.findIndex((elem) => elem.id === socketidUser);
            if (itemsRef.current[indexuser]) itemsRef.current[indexuser].insertAdjacentHTML("beforeend", `<p id="chat-usarname">${socketidUser} diz:</p><p id="chat-textmessage">${message}</p>`);
            if (itemsRef.current[indexperson]) itemsRef.current[indexperson].insertAdjacentHTML("beforeend", `<p id="chat-usarname">${socketidUser} diz:</p><p id="chat-textmessage">${message}</p>`);
        });
    }, []);

    return (
        <Container>
            <Home />
            {/* teste */}
            {/* <Login /> */}

            {userChats && userChats.map((elem, index) => <Chat key={elem.socketidperson} ref={(el) => (itemsRef.current[index] = el)} socketidperson={elem.socketidperson} visible={elem.visible} />)}

            <div id="multi-chats">{userChats && userChats.map((elem) => <MultiChats key={elem.socketidperson} person={elem.socketidperson} socketidperson={elem.socketidperson} newmessages={elem.newMessages} />)}</div>
            <input type="text" />
            <GlobalStyle />
            <button onClick={() => console.log(itemsRef)}>sdohjsdoiuj</button>
        </Container>
    );
}

export default App;
