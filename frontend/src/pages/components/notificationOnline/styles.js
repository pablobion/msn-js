import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 220px;
    word-wrap: break-word;
    bottom: 5px;
    right: 0;
    padding: 10px;
    height: 130px;
    background-image: linear-gradient(rgb(208, 226, 248), rgb(234, 247, 255, 0.9));
    border: thin solid gray;
    box-shadow: 0 0 5px #00000050;
    border-radius: 5px;

    #header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            height: 15px;
        }

        p {
            font-size: 12px;
            width: 150px;
            white-space: nowrap;
            margin-right: 10px;
        }
    }

    #body {
        margin-top: 20px;
        display: flex;
        align-items: center;

        #body-username {
            margin-left: 15px;
            white-space: nowrap;
            overflow: hidden;

            p {
                font-size: 12px;
                margin-bottom: 5px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    &.show {
        visibility: visible;
        -webkit-animation: fadein 0.5s, fadeout 0.5s 3s;
        animation: fadein 0.5s, fadeout 0.5s 3s;
    }

    @-webkit-keyframes fadein {
        from {
            bottom: 0;
            opacity: 0;
        }
        to {
            bottom: 30px;
            opacity: 1;
        }
    }

    @keyframes fadein {
        from {
            bottom: 0;
            opacity: 0;
        }
        to {
            bottom: 30px;
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeout {
        from {
            bottom: 30px;
            opacity: 1;
        }
        to {
            bottom: 40px;
            opacity: 0;
        }
    }

    @keyframes fadeout {
        from {
            bottom: 30px;
            opacity: 1;
        }
        to {
            bottom: 40px;
            opacity: 0;
        }
    }
`;
