import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #000;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .draggable {
        border: 1px solid #000;
        width: 120px;
        border-radius: 8px;
        padding: 20px;
        margin: 1rem;
        background-color: #29e;
        color: white;
        font-size: 20px;
        font-family: sans-serif;

        touch-action: none;

        /* This makes things *much* easier */
        box-sizing: border-box;
    }
`;
