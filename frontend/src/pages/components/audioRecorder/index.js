import React, { useState } from "react";
import useRecorder from "./useRecorder";

import { Container } from "./styles";

//icons
import { BsPlayFill } from "react-icons/bs";
import { GrStopFill } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineAudioMuted, AiOutlineAudio } from "react-icons/ai";

function App(props) {
    let [audioURL, isRecording, startRecording, stopRecording, sendRecording, deleteAudio] = useRecorder();
    const [mode, setMode] = useState("stop");

    const handleClick = () => {
        if (mode === "stop") {
            startRecording();
            setMode("play");
        } else {
            stopRecording();
            setMode("stop");
        }
    };
    return (
        <Container>
            {/* <audio src={props.audioURL} controls /> */}
            {mode === "stop" ? (
                <button onClick={handleClick}>
                    <BsPlayFill size={17} />
                    <AiOutlineAudio size={17} />
                </button>
            ) : (
                <div style={{ display: "flex", alignItems: "center", marginRight: 5 }}>
                    <button onClick={handleClick}>
                        <GrStopFill size={17} />
                        <AiOutlineAudioMuted size={17} />
                    </button>
                </div>
            )}

            <button onClick={() => sendRecording({ socketidPerson: props.socketidPerson })} disabled={!audioURL}>
                Enviar <FiSend style={{ marginLeft: 5 }} color={!audioURL ? "gray" : "green"} />
            </button>
            <button disabled={!audioURL} onClick={deleteAudio}>
                <BsFillTrashFill />
            </button>
        </Container>
    );
}

export default App;
