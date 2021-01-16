import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #000;
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
        border: 1px solid #000;

        #left {
            border: 1px solid #000;
            width: 170%;
            height: 400px;
            display: flex;
            flex-direction: column;
            #photos-galary {
                border: 1px solid #000;
                width: 100%;
                max-width: 100%;
                overflow: auto;

                img {
                    width: 20%;
                }
            }
        }
        #right {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
        }
    }
`;
