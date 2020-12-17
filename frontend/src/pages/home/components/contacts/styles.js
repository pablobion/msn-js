import styled from "styled-components";

//images
import arrowDown from "./assets/arrow-down.png";
import arrowLeft from "./assets/arrow-left.png";

export const Container = styled.div`
    flex: 1;
    height: 100%;
    background: white;
    #search-contacts {
        padding: 5px;
        width: 100%;
        border-bottom: 1px solid lightgray;
        display: flex;
        align-items: center;

        input {
            border: 1px solid lightgray;
            padding: 3px 3px 3px 5px;
            color: #454545;
            box-shadow: inset 0 0 3.5px lightgray;
            text-justify: center;
            width: 100%;
        }

        .button {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    #contacts-list {
        padding: 5px;

        details summary::-webkit-details-marker {
            display: none;
        }

        summary:after {
            background: url(${arrowLeft});
            background-repeat: no-repeat;

            float: left;
            height: 20px;
            width: 15px;
            content: " ";
            margin-top: 5px;
        }

        details[open] summary:after {
            background: url(${arrowDown});
            background-repeat: no-repeat;
        }
    }
`;
