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

const header = (props) => {
    return (
        <Container>
            <div id="div-username-subnick-chat">
                <div id="div-username">
                    <img src={balloon} alt="" />
                    <p id="username">Pablo bion</p>
                </div>
                <div id="div-subnick">
                    <p id="subnick-header">Wow, isso é muito legal =D</p>
                </div>
            </div>
            <div id="div-chat-menu-header">
                <div id="left">
                    <AeroButton>
                        <img src={invite}></img>
                    </AeroButton>
                    <AeroButton>
                        <img src={folder}></img>
                    </AeroButton>
                    <AeroButton>
                        <img src={phone}></img>
                    </AeroButton>
                    <AeroButton>
                        <img src={music}></img>
                    </AeroButton>
                    <AeroButton>
                        <img src={games}></img>
                    </AeroButton>
                    <AeroButton>
                        <img src={block}></img>
                    </AeroButton>
                </div>
                <div id="right">
                    <AeroButton>
                        <img src={colors}></img>
                    </AeroButton>
                </div>
            </div>
        </Container>
    );
};

export default header;
