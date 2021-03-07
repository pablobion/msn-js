import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    background: transparent;
    box-sizing: border;
    z-index: 2;
    top: 40%; /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%); /* This is a shorthand of
                                         translateX(-50%) and translateY(-50%) */

    video {
        display: none;
        border: 2px solid gray;
        border-radius: 10px;
        margin-bottom: 50px;
    }
    button {
        cursor: pointer;
    }

    .actions-buttons-play-winks {
        visibility: hidden;
    }

    #stop-video-winks {
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid gray;
        background: tomato;
        color: white;
        font-size: 20px;
        margin-left: 40%;
        margin-bottom: 10px;
        display: none;
    }
`;
