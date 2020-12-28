import React from "react";

import { Container } from "./styles";

//componenets
import Header from "./components/header/index";
import ChatText from "./components/chatText/index";
import Chat from "./components/chat/index";
import Persons from "./components/persons/index";
import MultiChats from "./components/multiChats/index";

const chat = () => {
    return (
        <Container>
            <div id="multi-chats">
                <MultiChats />
                <MultiChats />
                <MultiChats />
                <MultiChats />
                <MultiChats />
                <MultiChats />
                <MultiChats />
                <MultiChats />
            </div>
            <div id="chat-top">
                <Header />
            </div>
            <div id="chat-conversation">
                <div id="chat-conversation-left">
                    <ChatText />
                    <Chat />
                </div>
                <div id="chat-conversation-right">
                    <Persons />
                </div>
            </div>
        </Container>
    );
};

export default chat;
