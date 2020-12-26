import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background: linear-gradient(to bottom, rgb(138, 191, 209), rgb(236, 246, 249) 10%);
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #login-status {
        display: flex;
        align-items: center;
        select {
            margin-left: 10px;
        }
    }

    .checkbox-buttons-login {
        border: 1px solid #000;
        display: flex;
        align-items: center;
    }
`;
