import styled from "styled-components";

export const Container = styled.div`
    width: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;

    .button {
        border-bottom: 1px solid lightgray;
        border-radius: 0px;

        width: 40px;
        height: 40px;
        padding-top: 5px;

        img {
            width: 100%;
            height: 100%;
        }

        &:hover {
            border-radius: 5px;
            border: 1px solid gray;
            box-shadow: inset 0 0 3px rgba(255, 255, 255);
            background: rgba(255, 255, 255, 0.15);
        }

        a:visited {
            text-decoration: none;
            color: black;
        }
        a:hover {
            text-decoration: none;
            color: black;
        }
        a:focus {
            text-decoration: none;
            color: black;
        }
        a:hover,
        a:active {
            text-decoration: none;
            color: black;
        }
    }
`;
