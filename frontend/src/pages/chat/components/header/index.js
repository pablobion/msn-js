import React from "react";

import { Container } from "./styles";

//images
import balloon from "./assets/balloon.ico";
import invite from "./assets/invite.png";
import folder from "./assets/folder.png";
import phone from "./assets/phone.png";
import music from "./assets/music.png";
import games from "./assets/games.png";
import block from "./assets/block.png";
import colors from "./assets/colors.png";

//components
import AeroButton from "../../../components/aeroButton/index";

const Header = (props) => {
    let statusName;
    switch (props.status) {
        case "online":
            statusName = "Online";
            break;
        case "away":
            statusName = "Ausente";
            break;
        case "busy":
            statusName = "Ocupado";
            break;
        case "invisible":
            statusName = "Offline";
            break;
        default:
            statusName = "";
    }
    return (
        <Container>
            <div id="div-username-subnick-chat">
                <div id="div-username">
                    <img src={balloon} alt="" />
                    <p id="username">{props.username && `${props.username} - ${statusName}`}</p>
                </div>
                <div id="div-subnick">{props.subnick && <p id="subnick-header">{props.subnick}</p>}</div>
            </div>
            <div id="div-chat-menu-header">
                <div id="left">
                    <AeroButton disabled="true">
                        <img src={invite}></img>
                    </AeroButton>
                    <AeroButton disabled="true">
                        <img src={folder}></img>
                    </AeroButton>
                    <AeroButton disabled="true">
                        <img src={phone}></img>
                    </AeroButton>
                    <AeroButton disabled="true">
                        <img src={music}></img>
                    </AeroButton>
                    <AeroButton disabled="true">
                        <img src={games}></img>
                    </AeroButton>
                    <AeroButton disabled="true">
                        <img src={block}></img>
                    </AeroButton>
                </div>
            </div>
        </Container>
    );
};

export default Header;
