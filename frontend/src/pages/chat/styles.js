import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    width: 50vw;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    max-width: 50vw;

    #multi-chats {
        height: 30px;
        min-height: 30px;
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
        #chat-conversation-left {
            width: 78%;
            display: flex;
            flex-direction: column;
            padding: 5px;
        }
        #chat-conversation-right {
            width: 22%;
        }
    }
`;
