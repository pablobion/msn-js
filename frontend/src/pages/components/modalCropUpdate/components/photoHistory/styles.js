import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 0px 18vw;

    #header {
        p {
            display: flex;
            align-items: center;
            color: gray;
            img {
                width: 30px;
                margin-right: 10px;
            }
        }
        p + p {
            padding-top: 30px;
        }

        small {
            color: gray;
        }

        #title-header {
            font-size: 20px;
            color: rgb(53, 90, 136);
        }
    }

    #mid {
        display: flex;
        margin-top: 10px;

        #left {
            width: 100%;
            height: 400px;
            display: flex;
            flex-direction: column;

            #photos-galary {
                width: 100%;
                max-width: 100%;
                overflow: auto;
                display: flex;

                flex-wrap: wrap;

                img {
                    width: 20%;
                }

                .button-photos-galary {
                    border-radius: 5px;
                    border: 1px solid lightgray;
                    cursor: pointer;
                    margin: 5px;
                    height: 50px;
                    width: 50px;
                    padding: 1px;

                    &:hover {
                        background: lightgrey;
                    }

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 5px;
                    }
                }
            }
        }
        #right {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            button {
                margin-top: 40px;
                padding: 5px 20px;
                border-radius: 5px;
                background: lightgray;
                color: #454545;
                border: 1px solid gray;
                cursor: pointer;

                &:hover {
                    background: gray;
                    color: white;
                }
            }
        }
    }
    #bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            margin-top: 40px;
            padding: 5px 20px;
            border-radius: 5px;
            background: tomato;
            color: white;
            border: 1px solid lightgray;
            cursor: pointer;

            &:hover {
                background: red;
                color: white;
            }
        }
    }
`;
