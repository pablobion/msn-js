import styled from "styled-components";

export const Container = styled.div`
    height: 85vh;
    min-height: 450px;
    width: 95vw;

    @media (min-width: 600px) {
        height: 80vh;
        min-height: 450px;
        width: 850px;
        min-width: 580px;
    }

    border: 1px solid;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    position: absolute;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;

    /* Animations component */

    @keyframes shake {
        0% {
            transform: translate(1px, 1px) rotate(0deg);
        }
        10% {
            transform: translate(-1px, -2px) rotate(-3deg);
        }
        20% {
            transform: translate(-3px, 0px) rotate(3deg);
        }
        30% {
            transform: translate(3px, 2px) rotate(0deg);
        }
        40% {
            transform: translate(1px, -1px) rotate(3deg);
        }
        50% {
            transform: translate(-1px, 2px) rotate(-3deg);
        }
        60% {
            transform: translate(-3px, 1px) rotate(0deg);
        }
        70% {
            transform: translate(3px, 1px) rotate(-3deg);
        }
        80% {
            transform: translate(-1px, -1px) rotate(3deg);
        }
        90% {
            transform: translate(1px, 2px) rotate(0deg);
        }
        100% {
            transform: translate(1px, -2px) rotate(-3deg);
        }
    }

    z-index: ${(props) => {
        if (props.visible === true) {
            return 0;
        } else {
            return -1;
        }
    }};
    #header-chat-top {
        height: 30px;
        min-height: 30px;
        display: flex;
        overflow: auto;
        padding-top: 2px;
        background-color: rgb(205, 240, 246);
        border-radius: 5px 5px 0px 0px;
        padding: 3px;
        justify-content: flex-end;

        .header-chat-top-buttons {
            background: white;
            padding: 0px 7px 0px;
            border: 1px solid gray;
            margin-right: 10px;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    #chat-top {
        height: 80px;
        padding-bottom: 4px;
        background-color: rgb(236, 246, 249);
    }

    #chat-conversation {
        height: 100%;
        background-color: rgb(236, 246, 249);
        display: flex;
        max-height: 85.7%;
        position: relative;
        padding-bottom: 10px;
        padding: 10px;

        #chat-conversation-left {
            width: 78%;
            display: flex;
            flex-direction: column;
            padding: 5px;
        }
        #chat-conversation-right {
            padding-top: 10px;

            @media (max-width: 600px) {
                width: 42%;
                min-width: 42%;
            }

            @media (min-width: 600px) {
                width: 22%;
                max-width: 22%;
            }
        }
    }
`;
