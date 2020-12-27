import styled from "styled-components";

export const Container = styled.div`
    #modal-border-avatar-div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        overflow: hidden;
        margin-left: 3px;
        margin-top: 2px;

        width: ${(props) => (props.size ? `${props.size - 12}px` : "100px")};
        height: ${(props) => (props.size ? `${props.size - 12}px` : "100px")};

        #modal-border-avatar-frame {
            position: absolute;
            margin-left: 1px;
            margin-top: 2px;
            width: ${(props) => (props.size ? `${props.size}px` : "100px")};
        }
        #modal-border-avatar-picture {
            width: 100%;
            height: 100%;
        }
    }
`;
