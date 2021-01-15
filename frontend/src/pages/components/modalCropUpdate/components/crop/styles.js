import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #button-select-photo {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    #photo-and-preview {
        width: 100%;
        display: flex;
        align-items: center;
        padding-bottom: 40px;

        #photo-and-preview-crop {
            height: 50%;
            height: 450px;
            max-height: 450px;
            width: 50%;
            overflow: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 100%;
                height: 100%;
            }
            border: 1px dotted #000;
        }

        #photo-and-preview-preview {
            h2 {
                color: #454545;
                margin-bottom: 10px;
            }

            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
            max-height: 450px;
            overflow: auto;
        }
    }
`;

export const Button = styled.button`
    padding: 10px 30px 10px;
    border-radius: 5px;
    background: #1e9d24;
    border: 1px solid lightgray;
    color: white;
`;

export const SelectFile = styled.input`
    padding: 10px 30px 10px;
    border-radius: 5px;
    background: gainsboro;
    border: 1px solid lightgray;
    color: black;
`;
