import React, { useEffect, useState } from "react";
//configs
import { socket } from "../../configs/socket_export";
//context
import { useUser } from "../../pages/context/allusers";
//images
import balloon from "./assets/balloon.ico";
import { Container } from "./styles";

const MultiChats = React.forwardRef((props, ref) => {
    const { getPerson, chatRef, chatRefText } = useUser();

    const [contact, setContact] = useState();
    const [username, setUsername] = useState();

    useEffect(() => {
        setContact(getPerson(props.socketidperson));

        if (contact) {
            setUsername(contact.username);
        }
    });

    const openchat = (socketidperson) => {
        const indexPersonChat = chatRefText.current.findIndex((elem) => elem.id === socketidperson);

        socket.emit("change visible chat", socketidperson);
        const elemento = document.getElementById(`${props.socketidperson}-multichat`);
        elemento.style = "background-color: white;";

        const inputDOMNode = chatRef.current[indexPersonChat];
        inputDOMNode.parentNode.appendChild(inputDOMNode); // faz puxar para frente ao clicar para abrir
    };

    const changeColorOnHover = (mode) => {
        const elemento = document.getElementById(`${props.socketidperson}-multichat`);

        if (mode === "over") elemento.style = `background-color: gainsboro`;
        if (mode === "out") elemento.style = `background-color: white`;
    };

    return (
        <Container onClick={() => openchat(props.socketidperson)} ref={ref} id={`${props.socketidperson}-multichat`} onMouseOver={() => changeColorOnHover("over")} onMouseOut={() => changeColorOnHover("out")}>
            <img id="image-balloon-multichats" src={balloon} alt="" />
            {contact ? (
                <p>{contact.username}</p>
            ) : (
                <>
                    <p id="user-status-offline" style={{ color: "black", textDecoration: "line-through" }}>
                        {username}
                    </p>
                    <p style={{ color: "red", marginLeft: 5, fontWeight: "bold" }}>(Offline)</p>
                </>
            )}
        </Container>
    );
});

export default MultiChats;
