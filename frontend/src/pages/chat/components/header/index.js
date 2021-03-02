import React from "react";
//components
import AeroButton from "../../../components/aeroButton/index";
//images
import balloon from "./assets/balloon.ico";
import block from "./assets/block.png";
import folder from "./assets/folder.png";
import games from "./assets/games.png";
import invite from "./assets/invite.png";
import listen from "./assets/listen-music.png";
import music from "./assets/music.png";
import phone from "./assets/phone.png";
import { Container } from "./styles";

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
                    <img src={balloon} alt="icons-balloon" />
                    <p id="username">{props.username && `${props.username} - ${statusName}`}</p>
                </div>
                {/* <div id="div-subnick">{props.subnick && <p id="subnick-header">{props.subnick}</p>}</div> */}
                <div id="div-subnick">
                    {props.music ? (
                        props.music.name ? (
                            <>
                                <img src={listen} alt="icons-listen" style={{ marginRight: 10, width: 15 }} />
                                <a id="contact-music" href={props.music.url} target="_blank" style={{ fontSize: 2, color: "blue" }}>
                                    {props.music.name} ({props.music.author})
                                </a>
                            </>
                        ) : (
                            <p id="contact-subnick"></p>
                        )
                    ) : props.subnick ? (
                        <p id="subnick-header">{props.subnick}</p>
                    ) : (
                        <p id="subnick-header"></p>
                    )}
                </div>
            </div>
            <div id="div-chat-menu-header">
                <div id="left">
                    <AeroButton disabled={true}>
                        <img src={invite} alt="icon-invite"></img>
                    </AeroButton>
                    <AeroButton disabled={true}>
                        <img src={folder} alt="icons-folder"></img>
                    </AeroButton>
                    <AeroButton disabled={true}>
                        <img src={phone} alt="icon-fone"></img>
                    </AeroButton>
                    <AeroButton disabled={true}>
                        <img src={music} alt="icon-music"></img>
                    </AeroButton>
                    <AeroButton disabled={true}>
                        <img src={games} alt="icon-games"></img>
                    </AeroButton>
                    <AeroButton disabled={true}>
                        <img src={block} alt="icon-block"></img>
                    </AeroButton>
                </div>
            </div>
        </Container>
    );
};

export default Header;
