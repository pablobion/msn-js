import styled from "styled-components";

export const Container = styled.div`
    body {
        text-align: center;
        padding-top: 100px;
    }
    #div-drop {
        border: 5px dotted black;
        text-align: center;
        line-height: 100px;
        width: 200px;
        margin: auto;
        font-size: 40px;
        display: inline-block;
    }
    #link,
    p,
    div {
        display: none;
    }
    div {
        display: inline-block;
    }
    .uploading div {
        display: none;
    }
    .uploaded div {
        display: none;
    }
    .uploading p {
        display: inline;
    }
    .uploaded #link {
        display: inline;
    }
    em {
        position: absolute;
        bottom: 0;
        right: 0;
    }
`;
