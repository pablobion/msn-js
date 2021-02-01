//sounds
import nudge from "./assets/nudge.mp3";
import online from "./assets/online.mp3";
import type from "./assets/type.mp3";

export default (param) => {
    let sound;
    switch (param) {
        case "online":
            sound = online;
            break;
        case "nudge":
            sound = nudge;
            break;
        case "type":
            sound = type;
            break;
    }
    let audio = new Audio(sound);
    audio.play();
};
