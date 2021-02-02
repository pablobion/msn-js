import React, { useRef, useState, useEffect } from "react";

import { Container } from "./styles";

import dancingpig from "./videos/dancing_pig.mp4";
import kisses from "./videos/kiss.mp4";

function MyComponent(props) {
    const vidRef = useRef(null);

    // const handleClickOpen = () => {
    //     document.getElementById("myModal").style.display = "block";
    //     setDefault(true);
    // };

    // const handleClickClose = () => {
    //     document.getElementById("myModal").style.display = "none";
    //     setDefault(true);
    // };

    const handlePlayVideo = () => {
        vidRef.current.play();
        document.getElementById("myModal-video-winks").style.display = "block";
        setTimeout(() => {
            document.getElementById("myModal-video-winks").style.display = "none";
        }, vidRef.current.duration * 1000);
    };

    let winknow;

    switch (props.wink) {
        case "kisses":
            winknow = kisses;
            break;
        case "dancingpig":
            winknow = dancingpig;
            break;
    }

    useEffect(() => {}, []);

    return (
        <Container>
            <button onClick={handlePlayVideo}>sdfsd</button>

            <video id="myModal-video-winks" muted={false} ref={vidRef}>
                <source ref={vidRef} src={winknow} type="video/mp4" />
            </video>
        </Container>
    );
}
export default MyComponent;
