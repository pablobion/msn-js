import styled from "styled-components";

export const Container = styled.div`
    #modal-border-avatar-div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 3px;
        margin-top: 2px;
        width: ${(props) => (props.size ? `${props.size - 24}px` : "100px")};
        height: ${(props) => (props.size ? `${props.size - 24}px` : "100px")};

        #modal-border-avatar-frame {
            position: absolute;
            margin-left: 5px;
            margin-top: 5px;
            width: ${(props) => (props.size ? `${props.size}px` : "100px")};
        }

        #frame-div-avatar {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 100%;
            /* width: ${(props) => (props.size ? `${props.size - 20}px` : "100px")};
            height: ${(props) => (props.size ? `${props.size - 20}px` : "100px")}; */
            overflow: hidden;

            #modal-border-avatar-picture {
                width: inherit;
            }
        }
    }
`;
