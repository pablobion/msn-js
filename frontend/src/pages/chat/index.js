import React, { useEffect, useState } from "react";
//icons
import { VscChromeClose, VscChromeMinimize } from "react-icons/vsc";
//configs
import { socket } from "../../configs/socket_export";
//context
import { useUser } from "../context/allusers";
import Chat from "./components/chat/index";
import ChatText from "./components/chatText/index";
//componenets
import Header from "./components/header/index";
import Persons from "./components/persons/index";
//scripts
import draggable from "./scripts/draggable";
import { Container } from "./styles";

const ChatUser = React.forwardRef((props, ref) => {
    const { chatRefText, chatRef } = ref;

    const { getPerson } = useUser();

    const [person, setPerson] = useState({});
    const [oldPerson, setOldPerson] = useState({});
    const [user, setUser] = useState({});

    const x = window.innerWidth;

    const MinimizeChat = (socketidperson) => {
        socket.emit("change visible chat", socketidperson);
    };

    const closeChat = (socketidperson) => {
        socket.emit("close chat", socketidperson);
    };

    useEffect(() => {
        draggable(props.chatRefText, props.socketidperson);
        (async function () {
            setPerson(await getPerson(props.socketidperson)); //Verifica o person atraves do socketidperson passado por props, pegando o objeto do backend
            setUser(await getPerson(socket.id)); //Verifica o person atraves do socketidperson passado por props, pegando o objeto do backend
            if (person) {
                setOldPerson(person);
            }
        })();
    }, [getPerson(props.socketidperson), getPerson(socket.id)]);

    return (
        <Container className={x < 600 ? "" : "draggable-chat"} style={{ touchAction: "none" }} visible={props.visible} ref={chatRef}>
            <div id="header-chat-top">
                <button className="header-chat-top-buttons" onClick={() => MinimizeChat(props.socketidperson)}>
                    <VscChromeMinimize />
                </button>
                <button className="header-chat-top-buttons" onClick={() => closeChat(props.socketidperson)}>
                    <VscChromeClose color="red" />
                </button>
                {props.children}
            </div>
            <div id="chat-top">
                <Header username={person ? person.username : `${oldPerson.username}`} subnick={person ? person.subnick : `${oldPerson.subnick}`} status={person ? person.status : "invisible"} />
            </div>
            <div id="chat-conversation">
                <div id="chat-conversation-left">
                    <ChatText socketidUser={socket.id} socketidperson={props.socketidperson} ref={chatRefText} status={person ? person.status : "invisible"} />
                    <Chat socketidUser={socket.id} socketidPerson={props.socketidperson} />
                </div>
                <div id="chat-conversation-right">
                    <Persons statusUser={user ? user.status : "invisible"} statusPerson={person ? person.status : "invisible"} avatarperson={person ? person.avatar : oldPerson.avatar} avataruser={user ? user.avatar : ""} />
                </div>
            </div>
        </Container>
    );
});

export default ChatUser;
