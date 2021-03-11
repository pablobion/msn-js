import React from "react";

import { Container } from "./styles";

//socket
import { socket } from "../../../../../../configs/socket_export";

const SendWinks = (props) => {
    const winks = ["dancing_pig", "kiss", "bola", "bow", "cartao", "fartguy", "frog", "guitar_smash", "heartkey", "knock", "laughing_girl", "notes", "water_balloon", "yawning_moon"];

    const handleSendWink = (wink) => {
        socket.emit("send wink", { socketidPerson: props.socketidPerson, wink });
    };

    const images = winks.map((elem) => {
        return (
            <button key={elem}>
                <img src={require(`./assets/${elem}.png`).default} alt="image-pig" onClick={() => handleSendWink(elem)} />
            </button>
        );
    });

    return (
        <>
            <Container visible={props.visible}>{images}</Container>
        </>
    );
};

export default SendWinks;
