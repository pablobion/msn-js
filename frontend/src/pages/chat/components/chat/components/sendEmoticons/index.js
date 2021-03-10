import React from "react";

import { Container } from "./styles";

//socket
import { socket } from "../../../../../../configs/socket_export";
//
import { useUser } from "../../../../../context/allusers";

const SendWinks = React.forwardRef((props, ref) => {
    const emoticonslist = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63"];
    const {} = useUser();

    const handleSendWink = () => {
        console.log(ref);
    };

    const emoticons = emoticonslist.map((elem) => {
        return (
            <button>
                <img key={elem} src={require(`./assets/${elem}.png`).default} alt="image-pig" onClick={() => handleSendWink(elem)} />
            </button>
        );
    });

    return (
        <>
            <Container visible={props.visible} ref={ref}>
                {emoticons}
            </Container>
        </>
    );
});

export default SendWinks;
