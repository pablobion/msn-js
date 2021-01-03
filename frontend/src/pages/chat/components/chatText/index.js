import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";

//configs
import { socket } from "../../../../configs/socket_export";
import { useUser } from "../../../context/allusers";

const ChatText = () => {
    const { getPerson } = useUser();

    useEffect(() => {
        socket.on("send message chat server", ({ message, socketidUser, socketidPerson }) => {
            const user = getPerson(socketidUser);
            const person = getPerson(socketidPerson);

            const node = document.getElementById("div-messages-text");
            node.insertAdjacentHTML("beforeend", `<p id="chat-usarname">${user.username}:</p><p id="chat-textmessage">${message}</p>`);
        });
    }, []);
    return <Container id="div-messages-text"></Container>;
};

export default ChatText;
