import React, { useRef } from "react";

import { Container } from "./styles";

//videos
import dancingpig from "./videos/dancing_pig.mp4";
import kisses from "./videos/kiss.mp4";

let isplaying;

const FancyWinks = React.forwardRef((props, ref) => {
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
            <button className="actions-buttons-play-winks" id={`play-wink-kisses-${props.socketidPerson}`} onClick={() => handlePlayVideo(1)}>
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
                <source src={kisses} type="video/mp4" />
            </video>
        </Container>
    );
});
export default FancyWinks;
