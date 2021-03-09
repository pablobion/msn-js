import React, { useRef } from "react";

import { Container } from "./styles";

//videos
import dancingpig from "./videos/dancing_pig.mp4";
import kiss from "./videos/kiss.mp4";
import bola from "./videos/bola.mp4";
import bow from "./videos/bow.mp4";
import cartao from "./videos/cartao.mp4";
import fartguy from "./videos/fartguy.mp4";
import frog from "./videos/frog.mp4";
import guitar_smash from "./videos/guitar_smash.mp4";
import heartkey from "./videos/heartkey.mp4";
import knock from "./videos/knock.mp4";
import laughing_girl from "./videos/laughing_girl.mp4";
import notes from "./videos/notes.mp4";
import water_balloon from "./videos/water_balloon.mp4";
import yawning_moon from "./videos/yawning_moon.mp4";

let isplaying;

const FancyWinks = React.forwardRef((props, ref) => {
    const winks = ["dancingpig", "kiss", "bola", "bow", "cartao", "fartguy", "frog", "guitar_smash", "heartkey", "knock", "laughing_girl", "notes", "water_balloon", "yawing_moon"];

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
            <button className="actions-buttons-play-winks" id={`play-wink-pig-${props.socketidPerson}`} onClick={() => handlePlayVideo(0)}>
                wink1
            </button>
            <button className="actions-buttons-play-winks" id={`play-wink-kiss-${props.socketidPerson}`} onClick={() => handlePlayVideo(1)}>
                wink2
            </button>
            {/* fim dos botoes que so reproduzem */}

            {/* winks */}
            <button ref={buttonStop} id="stop-video-winks" onClick={handleStopVideo}>
                Stop
            </button>

            <video width={size} ref={(el) => (videoRef.current[0] = el)}>
                <source src={dancingpig} type="video/mp4" />
            </video>

            <video width={size} ref={(el) => (videoRef.current[1] = el)}>
                <source src={kiss} type="video/mp4" />
            </video>
            {/* {winks.map((elem, index) => {
                <video width={size} ref={(el) => (videoRef.current[index] = el)}>
                    <source src={eval(elem)} type="video/mp4" />
                </video>;
            })} */}
        </Container>
    );
});
export default FancyWinks;
