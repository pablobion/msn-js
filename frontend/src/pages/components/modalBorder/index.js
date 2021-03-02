import React from "react";
import away from "./assets/away.png";
import busy from "./assets/busy.png";
import invisible from "./assets/invisible.png";
import online from "./assets/online.png";
import { Container } from "./styles";
//scripts
import { verifyAvatarDefault } from "./verifyAvatarDefault.js";

const ModalBorder = (props) => {
    let size;

    switch (props.size) {
        case "32":
            size = 70;
            break;
        case "64":
            size = 100;
            break;
        case "96":
            size = 120;
            break;
        default:
            size = props.size;
    }

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
        default:
            status = invisible;
    }

    let avatar = verifyAvatarDefault(props.avatar);

    return (
        <Container size={size} top={props.top} left={props.left} minus={props.minus}>
            <div id="modal-border-avatar-div">
                <img id="modal-border-avatar-frame" src={status} alt="" />
                <div id="frame-div-avatar">
                    <img id="modal-border-avatar-picture" src={avatar} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default ModalBorder;
