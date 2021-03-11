import React, { useState, useEffect, useRef } from "react";

import ContentEditable from "react-contenteditable";
//configs
import { socket } from "../../../../configs/socket_export";
//components
import AeroButton from "../../../components/aeroButton/index";
import emotions from "./assets/emoticon.png";
import Audio from "../../../components/audioRecorder/index";
import SendWinks from "./components/sendWinks";
import SendEmoticon from "./components/sendEmoticons";

//images
import points from "./assets/points.png";
import tilt from "./assets/tilt.png";
import voice from "./assets/voice.png";
import winks from "./assets/winks.png";
import { Container, HeaderChat, MultiPoints, Sender, DivRecordVoice } from "./styles";

//winks
import Winks from "./components/sendWinks/components/winks/index";

const Chat = (props) => {
    const [record, setRecord] = useState();
    const [visibleSendWinks, setVisibleSendWinks] = useState(false);
    const [visibleSendEmoticons, setVisibleSendEmoticon] = useState(false);

    const DivRecordVoiceRef = useRef(null);

    const handleClickDrawAttention = () => {
        const socketidPerson = props.socketidPerson;
        socket.emit("Draw AttenAttention", socketidPerson);
    };

    const refContentEditable = useRef("");

    const [texto, setTexto] = useState("");

    const handleSend = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();

            if (!refContentEditable.current.lastHtml || refContentEditable.current.lastHtml === "" || refContentEditable.current.lastHtml === " " || refContentEditable.current.lastHtml === "") return false;

            if (props.socketidUser && props.socketidPerson) {
                const socketidUser = props.socketidUser;
                const socketidPerson = props.socketidPerson;

                socket.emit("send server message text", { message: refContentEditable.current.lastHtml, socketidUser, socketidPerson });
                setTexto("");
            }
        }
    };

    return (
        <>
            <MultiPoints>
                <img src={points} alt="icon-points" />
            </MultiPoints>
            <Winks socketidPerson={props.socketidPerson}></Winks>

            <HeaderChat>
                <AeroButton onCustomClick={() => (visibleSendEmoticons ? setVisibleSendEmoticon(false) : setVisibleSendEmoticon(true))}>
                    <img src={emotions} alt="icon-emotions" />
                    <SendEmoticon socketidPerson={props.socketidPerson} visible={visibleSendEmoticons} ref={refContentEditable} setTexto={setTexto} texto={texto} />
                </AeroButton>
                <AeroButton onCustomClick={() => (visibleSendWinks ? setVisibleSendWinks(false) : setVisibleSendWinks(true))}>
                    <img src={winks} alt="icon-winks" />
                    <SendWinks socketidPerson={props.socketidPerson} visible={visibleSendWinks} />
                </AeroButton>
                <AeroButton onCustomClick={handleClickDrawAttention}>
                    <img src={tilt} alt="icon-tilt" />
                </AeroButton>
                <DivRecordVoice ref={DivRecordVoiceRef}>
                    <AeroButton>
                        <img src={voice} alt="icon-voice" style={{ margin: 0, padding: 0, marginTop: 2, height: 14 }} />
                    </AeroButton>
                    <Audio audioURL={record} socketidPerson={props.socketidPerson} />
                </DivRecordVoice>
            </HeaderChat>

            <Container>
                {/* <textarea onKeyPress={handleUserKeyPress} value={messageText} onChange={(e) => handleChangeMessageText(e)} cols="30" rows="10"></textarea> */}
                <ContentEditable id="text-area" html={texto} onChange={(e) => setTexto(e.target.value)} onKeyDown={handleSend} ref={refContentEditable} />
            </Container>
            {/* <button
                onClick={() => {
                    console.log(refContentEditable.current.lastHtml);
                    setTexto("");
                }}
            >
                sla
            </button> */}
            <Sender>
                <button onClick={handleSend}>Enviar</button>
            </Sender>
        </>
    );
};

export default Chat;
