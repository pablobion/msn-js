import React from "react";

import { Container } from "./styles";

//images
import online from "./assets/online.png";
import invisible from "./assets/invisible.png";
import busy from "./assets/busy.png";
import away from "./assets/away.png";

//components
import AeroButton from "../../../../../components/aeroButton/index";

//configs
import { socket } from "../../../../../../configs/socket_export";

const Contact = (props) => {
    let status;
    switch (props.status) {
        case "online":
            status = online;
            break;
        case "busy":
            status = busy;
            break;
        case "away":
            status = away;
            break;
        case "offline":
            status = invisible;
            break;
        default:
    }

    const handleCustomClick = (socketidperson) => {
        socket.emit("click on chat", socketidperson);
    };

    return (
        <Container>
            <AeroButton id="button" onCustomClick={(e) => handleCustomClick(props.socketid)}>
                <img src={status} alt="" />
                {props.username && <p id="contact-username">{props.username}</p>}
                {props.subnick ? <p id="contact-subnick">- {props.subnick}</p> : <p id="contact-subnick"></p>}
            </AeroButton>
        </Container>
    );
};

export default Contact;
