import styled from "styled-components";

export const Container = styled.div`
    #modal-border-avatar-div {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        height: 100%;
        width: ${(props) => (props.size ? `${props.size}px` : "100px")};

        #modal-border-avatar-frame {
            position: absolute;
            overflow: hidden;
            margin-left: 3px;
            margin-top: 4px;
            width: ${(props) => (props.size ? `${props.size}px` : "100px")};
        }
        #modal-border-avatar-picture {
            width: 100%;
            height: 100%;
            width: ${(props) => (props.size ? `${props.size - 22}px` : "100px")};
        }
    }
`;
