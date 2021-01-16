import styled from "styled-components";

export const Container = styled.div`
    #modal-border-avatar-div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 3px;
        margin-top: 2px;

        width: ${(props) => (props.size ? `${props.size - props.minus}px` : "100px")};
        height: ${(props) => (props.size ? `${props.size - props.minus}px` : "100px")};

        #modal-border-avatar-frame {
            position: absolute;
            margin-left: ${(props) => props.left};
            margin-top: ${(props) => props.top};

            width: ${(props) => (props.size ? `${props.size + 1}px` : "100px")};
        }

        #frame-div-avatar {
            width: 100%;
            height: 100%;

            #modal-border-avatar-picture {
                width: inherit;
                border-radius: 3px;
            }
        }
    }
`;
