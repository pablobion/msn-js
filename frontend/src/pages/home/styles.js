import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #ecf6f9;
    border: thin solid #707070;
    border-radius: 7px;
    box-shadow: 0 0 5px #00000050;
    display: flex;
    flex-direction: column;

    #contacts-div {
        height: 60%;
        display: flex;
    }

    #ad-div {
        display: flex;
        height: 20%;
        align-items: center;
        justify-content: center;
    }
`;
