import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    background-image: url("frontend/src/pages/home/components/header/assets/background.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    /* #background {
        position: absolute;
        z-index: -1;
        width: 50%;
        height: 110px;
    } */

    #nav {
        padding: 5px;
        display: flex;
        align-items: center;
        img + img {
            margin-left: 10px;
        }
    }

    #profile {
        padding: 5px;
        display: flex;
        border: 1px solid;
        align-items: center;
        height: 80px;
        #left {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid;
        }
    }
`;
