import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    left: 3%;
    top: 21%;
    border: 1px solid #cacaca;
    width: 400px;
    height: 170px;
    background: ghostwhite;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 10px;
    z-index: ${(props) => (props.visible ? "0" : "-1")};
    overflow: auto;

    #button-expand {
        position: absolute;
        left: 5%;
        top: 10%;
    }

    button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25px;
        width: 25px;
        padding: 1px;
        border-radius: 5px;
        border: 1px solid lightgray;
        background: white;
        margin-right: 10px;
        margin-bottom: 5px;
        img {
            height: 100%;
            border-radius: 5px;
        }
    }
`;
