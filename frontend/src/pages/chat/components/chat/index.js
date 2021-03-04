import React, { useState, useEffect, useRef } from "react";
//configs
import { socket } from "../../../../configs/socket_export";
//components
import AeroButton from "../../../components/aeroButton/index";
import emotions from "./assets/emoticon.png";
import Audio from "../../../components/audioRecorder/index";

//images
import points from "./assets/points.png";
import tilt from "./assets/tilt.png";
import voice from "./assets/voice.png";
import winks from "./assets/winks.png";
import { Container, HeaderChat, MultiPoints, Sender, DivRecordVoice } from "./styles";

const Chat = (props) => {
    const [messageText, setMessageText] = useState();
    const [record, setRecord] = useState();

    const DivRecordVoiceRef = useRef(null);

    const handleChangeMessageText = (event) => {
        setMessageText(event.target.value);
    };

    const sendMessageText = () => {
        if (!messageText || messageText === "" || messageText === " " || messageText === "") return false;

        setMessageText("");
        if (props.socketidUser && props.socketidPerson) {
            const socketidUser = props.socketidUser;
            const socketidPerson = props.socketidPerson;

            socket.emit("send server message text", { message: messageText, socketidUser, socketidPerson });
        }
    };

    const handleClickDrawAttention = () => {
        const socketidPerson = props.socketidPerson;
        socket.emit("Draw AttenAttention", socketidPerson);
    };

    const handleUserKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessageText();
        }
    };

    const openVoice = () => {
        let style = DivRecordVoiceRef.current.style;

        // DivRecordVoiceRef.current.style = `animation: changewidth 0.5s;`;

        // setTimeout(() => {
        //     DivRecordVoiceRef.current.style = `animation: none, width: 280px;`;
        // }, 1000);
    };

    return (
        <>
            <MultiPoints>
                <img src={points} alt="icon-points" />
            </MultiPoints>
            <HeaderChat>
                <AeroButton disabled={true}>
                    <img src={emotions} alt="icon-emotions" />
                </AeroButton>
                <AeroButton disabled={true}>
                    <img src={winks} alt="icon-winks" />
                </AeroButton>
                <AeroButton onCustomClick={handleClickDrawAttention}>
                    <img src={tilt} alt="icon-tilt" />
                </AeroButton>
                <DivRecordVoice ref={DivRecordVoiceRef}>
                    <AeroButton onCustomClick={openVoice}>
                        <img src={voice} alt="icon-voice" style={{ margin: 0, padding: 0, marginTop: 2, height: 14 }} />
                    </AeroButton>
                    <Audio audioURL={record} socketidPerson={props.socketidPerson} />
                </DivRecordVoice>
            </HeaderChat>

            <Container>
                <textarea onKeyPress={handleUserKeyPress} value={messageText} onChange={(e) => handleChangeMessageText(e)} cols="30" rows="10"></textarea>
            </Container>
            <Sender>
                <button onClick={sendMessageText}>Enviar</button>
            </Sender>
        </>
    );
};

export default Chat;
