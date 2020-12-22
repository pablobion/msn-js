import React from "react";

import { MultiPoints, HeaderChat, Container, Sender } from "./styles";

//images
import points from "./assets/points.png";
import emotions from "./assets/emoticon.png";
import winks from "./assets/winks.png";
import tilt from "./assets/tilt.png";
import voice from "./assets/voice.png";
import bg from "./assets/bg.png";

//components
import AeroButton from "../../../components/aeroButton/index";

const chat = () => {
    return (
        <>
            <MultiPoints>
                <img src={points} alt="" />
            </MultiPoints>
            <HeaderChat>
                <AeroButton>
                    <img src={emotions} alt="" />
                </AeroButton>
                <AeroButton>
                    <img src={winks} alt="" />
                </AeroButton>
                <AeroButton>
                    <img src={tilt} alt="" />
                </AeroButton>
                <AeroButton>
                    <img src={voice} alt="" />
                </AeroButton>
            </HeaderChat>
            <Container></Container>
            <Sender>
                <button>Enviar</button>
            </Sender>
        </>
    );
};

export default chat;
