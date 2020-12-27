import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background: linear-gradient(to bottom, rgb(138, 191, 209), rgb(236, 246, 249) 10%);
    padding-top: 20px;
    padding-left: 20px;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    #login-input-email {
        margin-top: 40px;
    }

    .div-input-login {
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 10px;
    }

    #login-status {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        margin-top: 20px;
        width: 250px;
        select {
            margin-left: 10px;
            border: none;
            background: transparent;
        }
    }

    .checkbox-buttons-login {
        display: flex;
        align-items: center;
        width: 250px;
        margin-bottom: 30px;
        p {
            margin-left: 10px;
        }
    }

    button {
        font-size: 14px;
        border-radius: 3px;
        padding: 2px 10px;
        background-image: linear-gradient(rgb(224, 240, 248), rgb(176, 224, 248));
        border: thin solid rgb(72, 120, 160);
        color: rgb(49, 21, 99);
        box-shadow: inset 1px 1px 2px rgb(40, 208, 248);
        width: 80px;

        &:hover {
            box-shadow: inset 0 0 2px transparent;
            cursor: pointer;
        }

        &:active {
            background-image: linear-gradient(rgb(224, 240, 248), rgb(176, 224, 248));
            box-shadow: inset 1px 1px 2px gray;
        }
    }
`;
