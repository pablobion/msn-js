import styled from "styled-components";

export const Button = styled.button`
    background: transparent;
    padding: 5px;

    height: 100%;

    border-radius: 5px;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid gray;
        box-shadow: inset 0 0 3px rgba(255, 255, 255);
        background: rgba(255, 255, 255, 0.15);
    }

    &:active {
        border: 1px solid gray;
        box-shadow: inset 0 0 3px #454545;
        background: rgba(255, 255, 255, 0.15);
    }
`;
