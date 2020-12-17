import React from "react";

import { Container } from "./styles";

//componenets
import Header from "./components/header/index";

const chat = () => {
    return (
        <Container>
            <div id="multi-chats"></div>
            <div id="chat-top">
                <Header />
            </div>
        </Container>
    );
};

export default chat;
