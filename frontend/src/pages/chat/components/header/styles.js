import styled from "styled-components";

//images
import backgroundHeader from "./assets/chat_header.png";

export const Container = styled.div`
    padding: 5px;
    /* background-image: url(${backgroundHeader});
    background-repeat: no-repeat;
    background-size: 100% 100%; */

    background: linear-gradient(180deg, rgba(247, 253, 255, 1) 0%, rgba(214, 227, 234, 1) 50%, rgba(238, 249, 250, 1) 100%);
    background-color: transparent;

    height: 100%;
    box-shadow: 0px 1px 5px #00000077;

    #div-username-subnick-chat {
        height: 35px;
        #div-username {
            display: flex;
            align-items: center;
            height: 50%;

            #username {
                font-size: 12px;
                margin-left: 10px;
            }
        }
        #div-subnick {
            height: 50%;
            #subnick-header {
                font-size: 12px;
                padding-left: 27px;
                color: gray;
            }
        }
    }

    #div-chat-menu-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
