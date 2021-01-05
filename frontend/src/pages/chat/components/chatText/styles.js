import styled from "styled-components";

export const Container = styled.div`
    border: thin solid #bed6e0;
    background-color: white;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: gray;
    overflow: auto;
    height: 150%;
    padding: 5px;
    resize: vertical;

    #chat-textmessage {
        margin: 2px 0px 8px 10px;
    }
`;
