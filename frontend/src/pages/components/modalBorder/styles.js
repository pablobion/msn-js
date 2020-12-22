import styled from "styled-components";

export const Container = styled.div`
    /* #border-avatar {
        z-index: 0;
    }

    #avatar-div {
        position: absolute;
        margin-left: -4px;
        margin-top: -4px;
        width: 47px;
        height: 47px;
        overflow: hidden;
        border-radius: 2px;
    }*/
    #modal-border-avatar-div {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        height: 50px;

        #modal-border-avatar-frame {
            position: absolute;
            overflow: hidden;
            margin-left: 2px;
        }
        #modal-border-avatar-picture {
            width: 48px;
            height: 50px;
        }
    }
`;
