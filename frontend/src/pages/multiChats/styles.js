import styled from "styled-components";

export const Container = styled.button`
    border: 1px solid #000;
    height: 100%;
    display: flex;
    align-items: center;
    width: 99%;
    min-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 5px;
    padding-left: 2px;
    padding-right: 5px;
    border-radius: 5px 5px 0px 0px;
    background-color: white;
    border: thin solid rgb(72, 120, 160);
    box-shadow: 1px 2px 3px gray;

    cursor: pointer;

    &:hover {
        background: gainsboro;
    }

    &:active {
        background: darkgray;
    }

    #image-balloon-multichats {
        margin-right: 3px;
        height: 15px;
        width: 15px;
    }

    #user-status-offline {
        color: tomato;
    }
`;
