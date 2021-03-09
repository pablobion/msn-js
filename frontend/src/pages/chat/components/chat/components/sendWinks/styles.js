import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    left: 5%;
    top: 39%;
    border: 1px solid #cacaca;
    width: 480px;
    height: 120px;
    background: #e8e8e8;
    display: flex;
    align-items: center;

    flex-wrap: wrap;
    padding-left: 10px;
    z-index: ${(props) => (props.visible ? "0" : "-1")};

    #button-expand {
        position: absolute;
        left: 5%;
        top: 10%;
    }

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 41%;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-top-color: #dadada;
        border-bottom: 0;
        margin-left: -185px;
        margin-bottom: -12px;
    }

    button {
        cursor: pointer;
        height: 50px;
        border-radius: 5px;
        border: 1px solid gray;
        background: white;
        margin-right: 10px;
        img {
            height: 100%;
            border-radius: 5px;
        }
    }
`;
