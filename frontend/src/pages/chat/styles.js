import { BiBluetooth } from "react-icons/bi";
import styled from "styled-components";

export const Container = styled.div`
    height: 80vh;
    width: 50vw;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    position: absolute;
    border-radius: 5px;
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
        max-height: 83.7%;
        position: relative;
        border-radius: 5px;
        padding-bottom: 10px;

        #chat-conversation-left {
            width: 78%;
            display: flex;
            flex-direction: column;
            padding: 5px;
        }
        #chat-conversation-right {
            padding-top: 10px;
            width: 22%;
        }
    }
`;
