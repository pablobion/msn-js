import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";

//configs
import { socket } from "../../../../configs/socket_export";
import { useUser } from "../../../context/allusers";

const ChatText = React.forwardRef((props, ref) => {
    const { getPerson } = useUser();

    useEffect(() => {
        // socket.on("send client message text", ({ message, socketidUser, socketidPerson }) => {
        //     const user = getPerson(socketidUser);
        //     const person = getPerson(socketidPerson);
        //     const node = document.getElementById("div-messages-text");
        //     if (node && user) node.insertAdjacentHTML("beforeend", `<p id="chat-usarname">${user.username} diz:</p><p id="chat-textmessage">${message}</p>`);
        // });
    }, []);
    return (
        <Container className="div-messages-text" id={props.socketidperson} ref={ref}>
            {props.children}
        </Container>
    );
});

export default ChatText;
