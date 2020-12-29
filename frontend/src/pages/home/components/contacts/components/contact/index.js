import React from "react";

import { Container } from "./styles";

//images
import online from "./assets/online.png";
import invisible from "./assets/invisible.png";
import busy from "./assets/busy.png";
import away from "./assets/away.png";

//components
import AeroButton from "../../../../../components/aeroButton/index";

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

    const handleCustomClick = () => {
        alert("ssssssssssssssssssssssssssssss");
    };

    return (
        <Container>
            <AeroButton id="button" onCustomClick={handleCustomClick}>
                <img src={status} alt="" />
            </AeroButton>
            {props.username && <p id="contact-username">{props.username}</p>}
            {props.subnick ? <p id="contact-subnick">- {props.subnick}</p> : <p id="contact-subnick"></p>}
        </Container>
    );
};

export default Contact;
