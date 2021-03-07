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

    #div-country-flag {
        display: flex;
        margin-top: 10px;
        .country-flag {
            width: 40px;
            cursor: pointer;
        }

        img + img {
            margin-left: 10px;
        }
    }

    .change-photo-button {
        margin-top: 20px;
        border: 1px solid #000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 10px;
        background-image: linear-gradient(rgb(224, 240, 248), rgb(176, 224, 248));
        border: thin solid rgb(72, 120, 160);
        border-radius: 5px;
        cursor: pointer;

        &:active {
            background-image: linear-gradient(rgb(224, 240, 248), rgb(176, 214, 248));
            box-shadow: inset 1px 1px 2px gray;
        }
    }

    #login-input-email {
        height: 30px;
        font-size: 16px;
        padding-left: 5px;
    }

    .div-input-login {
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 30px 0px;
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
        margin-bottom: 20px;
        p {
            margin-left: 10px;
        }

        button {
            background-image: linear-gradient(rgb(224, 240, 248), rgb(176, 224, 248));
            border: thin solid rgb(72, 120, 160);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 3px 5px;
            margin-left: 100px;
            cursor: pointer;
            border-radius: 5px;

            &:hover {
                box-shadow: inset 0 0 2px transparent;
                cursor: pointer;
            }

            &:active {
                background-image: linear-gradient(rgb(224, 240, 248), rgb(176, 214, 248));
                box-shadow: inset 1px 1px 2px gray;
            }
        }
    }

    #footer-buttons {
        display: flex;
        align-items: center;
        justify-content: center;

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
    }

    #div-gif-singin {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        p {
            margin-top: 10px;
            color: #454545;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
