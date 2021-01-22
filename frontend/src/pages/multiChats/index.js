import React, { useState, useEffect } from "react";

import { Container } from "./styles";

//images
import balloon from "./assets/balloon.ico";

//context
import { useUser } from "../../pages/context/allusers";

//configs
import { socket } from "../../configs/socket_export";

const MultiChats = React.forwardRef((props, ref) => {
    const { getPerson } = useUser();

    const [contact, setContact] = useState();
    const [username, setUsername] = useState();

    useEffect(() => {
        setContact(getPerson(props.socketidperson));

        if (contact) {
            setUsername(contact.username);
        }
    });

    const openchat = (socketidperson) => {
        socket.emit("change visible chat", socketidperson);
        const elemento = document.getElementById(`${props.socketidperson}-multichat`);
        elemento.style = "background-color: white;";
    };

    return (
        <Container onClick={() => openchat(props.socketidperson)} ref={ref} id={`${props.socketidperson}-multichat`}>
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
