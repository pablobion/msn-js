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

function App() {
    const { userChats } = useUser();

    return (
        <Container id="myDIV">
            <Home />
            {/* teste */}
            {/* <Login /> */}

            {userChats && userChats.map((elem) => <Chat key={elem.socketidperson} socketidperson={elem.socketidperson} visible={elem.visible} />)}

            <div id="multi-chats">{userChats && userChats.map((elem) => <MultiChats key={elem.socketidperson} id={elem.socketidperson} socketidperson={elem.socketidperson} newmessages={elem.newMessages} />)}</div>
            <GlobalStyle />
        </Container>
    );
}

export default App;
