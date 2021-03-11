import React, { useRef } from "react";

import { Container } from "./styles";

//context
import { useUser } from "../../../../../../../context/allusers";

let isplaying;

const FancyWinks = React.forwardRef((props, ref) => {
    const { language } = useUser();
    const winks = ["dancing_pig", "kiss", "bola", "bow", "cartao", "fartguy", "frog", "guitar_smash", "heartkey", "knock", "laughing_girl", "notes", "water_balloon", "yawning_moon"];

    const videoRef = useRef([]);
    const buttonStop = useRef();
    let size = 400;

    const handlePlayVideo = (num) => {
        if (videoRef.current[num]) {
            videoRef.current[num].play();
            videoRef.current[num].style = "display: block;";
        }
        if (buttonStop.current) buttonStop.current.style = "display: block;";

        isplaying = setTimeout(() => {
            if (videoRef.current[num]) videoRef.current[num].style = "display: none;";
            if (buttonStop.current) buttonStop.current.style = "display: none;";
        }, videoRef.current[num].duration * 1000);
    };

    const handleStopVideo = () => {
        videoRef.current.forEach((elem, index) => {
            if (videoRef.current) {
                videoRef.current[index].style = "display: none;";
                videoRef.current[index].pause();
                videoRef.current[index].currentTime = 0;
            }
        });

        if (buttonStop.current) buttonStop.current.style = "display: none;";
        clearTimeout(isplaying);
    };

    return (
        <Container>
            {/* botões que so reproduzem */}

            {winks.map((elem, index) => {
                return <button key={elem} className="actions-buttons-play-winks" id={`play-wink-${elem}-${props.socketidPerson}`} onClick={() => handlePlayVideo(index)} />;
            })}
            {/* fim dos botoes que so reproduzem */}

            {/* winks */}
            <button ref={buttonStop} id="stop-video-winks" onClick={handleStopVideo}>
                {language === "br" ? "Parar" : "Stop"}
            </button>
            {winks.map((elem, index) => {
                return (
                    <video key={elem} width={500} ref={(el) => (videoRef.current[index] = el)}>
                        <source src={require(`./videos/${elem}.mp4`).default} type="video/mp4" />
                    </video>
                );
            })}
        </Container>
    );
});
export default FancyWinks;
