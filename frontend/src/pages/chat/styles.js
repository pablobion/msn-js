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
        display: flex;
        overflow: auto;
        padding-top: 2px;
        background-color: rgb(205, 240, 246);

        ::-webkit-scrollbar {
            height: 5px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
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
