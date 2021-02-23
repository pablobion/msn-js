import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    #button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
            width: 18px;
        }
        padding: 1px;
    }

    #contact-username {
        font-weight: normal;
        margin-left: 5px;
        font-size: 14px;
    }
    #contact-subnick {
        margin-left: 5px;
        font-size: 12px;
        color: gray;
        margin-top: 1px;
    }
    #contact-music {
        margin-left: 5px;
        font-size: 12px;
        margin-top: 1px;
        color: rgb(0, 136, 228);
    }
`;
