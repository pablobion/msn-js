import React, { useState, useEffect } from "react";

import { Container } from "./styles";

//componenets
import Header from "./components/header/index";
import ChatText from "./components/chatText/index";
import Chat from "./components/chat/index";
import Persons from "./components/persons/index";

import interact from "interactjs";

//configs
import { socket } from "../../configs/socket_export";

const ChatUser = (props) => {
    interact(".draggable-chat").draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: "parent",
                endOnly: true,
            }),
        ],
        // enable autoScroll
        autoScroll: true,

        listeners: {
            // call this function on every dragmove event
            move: dragMoveListener,

            // call this function on every dragend event
        },
    });

    function dragMoveListener(event) {
        var target = event.target;
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
        var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

        target.parentNode.appendChild(target);

        // translate the element
        target.style.webkitTransform = target.style.transform = "translate(" + x + "px, " + y + "px)";

        // update the posiion attributes
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
    }

    // this function is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener;

    const minimizeChat = (socketidperson) => {
        socket.emit("change visible chat", socketidperson);
    };

    const closeChat = (socketidperson) => {
        socket.emit("close chat", socketidperson);
    };

    return (
        <Container className="draggable-chat" visible={props.visible}>
            <div id="header-chat-top">
                <button onClick={() => minimizeChat(props.socketidperson)}>Minimizar</button>
                <button onClick={() => closeChat(props.socketidperson)}>Fechar</button>
                {props.children}
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

export default ChatUser;
