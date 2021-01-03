import React, { useState, useEffect } from "react";

import { Container } from "./styles";

//images
import balloon from "./assets/balloon.ico";

//context
import { useUser } from "../../pages/context/allusers";

//configs
import { socket } from "../../configs/socket_export";

const MultiChats = (props) => {
    const { getPerson } = useUser();

    const [contact, setContact] = useState();
    const [username, setUsername] = useState();

    useEffect(() => {
        setContact(getPerson(props.id));
        if (contact) setUsername(contact.username);
    });

    const openchat = (socketidperson) => {
        socket.emit("change visible chat", socketidperson);
    };

    return (
        <Container onClick={() => openchat(props.socketidperson)}>
            <img id="image-balloon-multichats" src={balloon} alt="" />
            {contact ? <p>{contact.username}</p> : <p id="user-status-offline">{username} (Offline)</p>}
        </Container>
    );
};

export default MultiChats;
