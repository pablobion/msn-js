import React, { useState, useEffect } from "react";

import { Container } from "./styles";

//componenets
import Header from "./components/header/index";
import ChatText from "./components/chatText/index";
import Chat from "./components/chat/index";
import Persons from "./components/persons/index";

//icons
import { VscChromeMinimize, VscChromeClose } from "react-icons/vsc";

//configs
import { socket } from "../../configs/socket_export";

//context
import { useUser } from "../context/allusers";

//scripts
import draggable from "./scripts/draggable";

const ChatUser = React.forwardRef((props, ref) => {
    const { getPerson } = useUser();

    const [person, setPerson] = useState({});
    const [usernamePersonOld, setUsernamePersonOld] = useState();
    const [subnickOld, setSubnickOld] = useState();
    const [user, setUser] = useState({});

    const minimizeChat = (socketidperson) => {
        socket.emit("change visible chat", socketidperson);
    };

    const closeChat = (socketidperson) => {
        socket.emit("close chat", socketidperson);
    };

    useEffect(() => {
        draggable();

        (async function () {
            setPerson(await getPerson(props.socketidperson)); //Verifica o person atraves do socketidperson passado por props, pegando o objeto do backend
            setUser(await getPerson(socket.id)); //Verifica o person atraves do socketidperson passado por props, pegando o objeto do backend
            if (person) {
                setUsernamePersonOld(person.username); // coloca username da pessoa em um state
                setSubnickOld(person.subnick); // coloca subnick da pessoa em um state
            }
        })();
    }, [getPerson(props.socketidperson), getPerson(socket.id)]);

    return (
        <Container className="draggable-chat" visible={props.visible}>
            <div id="header-chat-top">
                <button className="header-chat-top-buttons" onClick={() => minimizeChat(props.socketidperson)}>
                    <VscChromeMinimize />
                </button>
                <button className="header-chat-top-buttons" onClick={() => closeChat(props.socketidperson)}>
                    <VscChromeClose color="red" />
                </button>
                {props.children}
            </div>
            <div id="chat-top">
                <Header username={person ? person.username : `${usernamePersonOld}`} subnick={person ? person.subnick : `${subnickOld}`} status={person ? person.status : "invisible"} />
            </div>
            <div id="chat-conversation">
                <div id="chat-conversation-left">
                    <ChatText socketidUser={socket.id} socketidperson={props.socketidperson} ref={ref} status={person ? person.status : "invisible"} />
                    <Chat socketidUser={socket.id} socketidPerson={props.socketidperson} />
                </div>
                <div id="chat-conversation-right">
                    <Persons statusUser={user.status} statusPerson={person ? person.status : "invisible"} />
                </div>
            </div>
        </Container>
    );
});

export default ChatUser;
