import React from "react";

import { Container } from "./styles";

//images
import dancingpigimage from "./assets/dancingpig.png";
import kissesimage from "./assets/kisses.png";

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
                    <img src={dancingpigimage} alt="image-pig" onClick={() => handleSendWink("pig")} />
                </button>
                <button>
                    <img src={kissesimage} alt="image-pig" onClick={() => handleSendWink("kisses")} />
                </button>
            </Container>
        </>
    );
};

export default SendWinks;
