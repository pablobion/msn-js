import styled from "styled-components";

export const Container = styled.div`
    border: thin solid #bed6e0;
    background-color: white;
    display: flex;
    flex-direction: column;
    font-size: 6px;
    color: gray;
    overflow: auto;
    height: 60%;
    padding: 5px;

    #chat-textmessage {
        margin-left: 10px;
        margin-top: 2px;
    }
`;
