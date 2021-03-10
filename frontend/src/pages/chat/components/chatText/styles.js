import styled from "styled-components";

export const Container = styled.div`
    border: thin solid #bed6e0;
    background-color: white;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: gray;
    overflow-x: hidden; /* Hide horizontal scrollbar */
    overflow-y: scroll; /* Add vertical scrollbar */
    height: 150%;
    padding: 5px;
    resize: vertical;
    cursor: default;

    .chat-textmessage {
        margin: 2px 0px 8px 10px;
    }

    #attention {
        margin-top: 10px;
        color: red;
    }
`;

export const MessageStatus = styled.span`
    border: 1px solid lightgray;
    color: black;
    padding: 5px;
    display: flex;
    align-items: center;
    background: rgb(255, 255, 185, 0.7);
    img {
        margin-right: 10px;
    }
    height: 25px;
`;
