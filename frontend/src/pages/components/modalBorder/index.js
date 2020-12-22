import React from "react";

import { Container } from "./styles";

//images

import frame32 from "./assets/frame_32.png";
import frame64 from "./assets/frame_64.png";
import frame96 from "./assets/frame_96.png";

const modalBorder = (props) => {
    return (
        <Container>
            <div id="modal-border-avatar-div">
                <img id="modal-border-avatar-frame" src={frame64} alt=""></img>
                <img id="modal-border-avatar-picture" src={props.avatar} alt="" />
            </div>
        </Container>
    );
};

export default modalBorder;
