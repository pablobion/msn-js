import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    background: transparent;
    box-sizing: border;
    z-index: 2;
    top: 50%; /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%); /* This is a shorthand of
                                         translateX(-50%) and translateY(-50%) */

    video {
        display: none;
    }
`;
