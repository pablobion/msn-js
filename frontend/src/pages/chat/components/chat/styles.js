import styled from "styled-components";

export const MultiPoints = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`;

export const HeaderChat = styled.div`
    border: 1px solid;
    margin-top: 5px;
    border: thin solid #bed6e0;
    height: 30px;
    background: linear-gradient(180deg, rgb(248, 253, 255) 30%, rgb(234, 244, 247) 60%, rgb(248, 253, 255) 70%);
    button {
        margin-left: 5px;
    }

    button + button {
        margin-left: 10px;
    }
`;

export const Container = styled.div`
    border-bottom: thin solid #bed6e0;
    border-left: thin solid #bed6e0;
    border-right: thin solid #bed6e0;
    background-color: white;
    display: flex;
    flex-direction: column;
    font-size: 6px;
    color: gray;
    overflow: auto;
    height: 40%;
    padding: 5px;
    resize: none;
    margin-bottom: 10px;

    #header-chat-area {
        border: 1px solid;
    }
`;

export const Sender = styled.div`
    display: flex;
    justify-content: flex-end;
    button {
        font-size: 14px;
        border-radius: 3px;
        padding: 2px 10px;
        background-image: linear-gradient(rgb(224, 240, 248), rgb(176, 224, 248));
        border: thin solid rgb(72, 120, 160);
        color: rgb(49, 21, 99);
        box-shadow: inset 0 0 1px rgb(40, 208, 248);

        &:hover {
            background: none;
        }
    }
`;
