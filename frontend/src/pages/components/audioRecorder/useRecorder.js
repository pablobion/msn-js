import { useEffect, useState } from "react";

import { socket } from "../../../configs/socket_export";

const useRecorder = () => {
    const [audioURL, setAudioURL] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [recorder, setRecorder] = useState(null);
    const [obj, setObj] = useState(null);

    useEffect(() => {
        // Lazily obtain recorder first time we're recording.
        if (recorder === null) {
            if (isRecording) {
                requestRecorder().then(setRecorder, console.error);
            }
            return;
        }

        // Manage recorder state.
        if (isRecording) {
            recorder.start();
        } else {
            recorder.stop();
        }

        // Obtain the audio when ready.
        const handleData = (e) => {
            setObj(e);
            setAudioURL(URL.createObjectURL(e.data));
        };

        recorder.addEventListener("dataavailable", handleData);
        return () => recorder.removeEventListener("dataavailable", handleData);
    }, [recorder, isRecording]);

    const startRecording = () => {
        setIsRecording(true);
    };

    const stopRecording = () => {
        setIsRecording(false);
    };
    const sendRecording = ({ socketidPerson }) => {
        if (audioURL === "") return false;

        var reader = new FileReader();
        reader.readAsDataURL(obj.data);
        reader.onloadend = function () {
            var base64data = reader.result;
            socket.emit("send audio", { socketidPerson, audioURL: base64data });
            setAudioURL("");
        };
    };

    const deleteAudio = () => {
        setAudioURL("");
    };

    return [audioURL, isRecording, startRecording, stopRecording, sendRecording, deleteAudio];
};

async function requestRecorder() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return new MediaRecorder(stream);
}
export default useRecorder;
