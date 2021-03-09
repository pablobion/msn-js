import React from "react";

import { Container } from "./styles";

//images
import dancingpig from "./assets/dancingpig.png";
import kisses from "./assets/kisses.png";
import bola from "./assets/bola.png";
import bow from "./assets/bow.jpg";
import cartao from "./assets/cartao.png";
import fartguy from "./assets/fartguy.png";
import frog from "./assets/frog.png";
import guitar_smash from "./assets/guitar_smash.png";
import heartkey from "./assets/heartkey.png";
import knock from "./assets/knock.png";
import laughing_girl from "./assets/laughing_girl.png";
import notes from "./assets/notes.png";
import water_balloon from "./assets/water_balloon.png";
import yyawning_moon from "./assets/yawning_moon.png";

//socket
import { socket } from "../../../../../../configs/socket_export";

const SendWinks = (props) => {
    const handleSendWink = (wink) => {
        socket.emit("send wink", { socketidPerson: props.socketidPerson, wink });
    };

    return (
        <>
            <Container visible={props.visible}>
                <button>
                    <img src={dancingpig} alt="image-pig" onClick={() => handleSendWink("pig")} />
                </button>
                <button>
                    <img src={kisses} alt="image-pig" onClick={() => handleSendWink("kisses")} />
                </button>
            </Container>
        </>
    );
};

export default SendWinks;
