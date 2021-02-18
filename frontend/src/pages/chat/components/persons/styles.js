import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 5px;
    padding-bottom: 40px;
    align-items: center;
    height: 100%;

    div {
        #btn-edit-photo {
            padding-top: 80px;
            padding-left: 80px;
            padding-right: 30px;
            padding-bottom: 30px;
            position: absolute;

            margin-top: -114px;
            margin-left: -10px;

            height: 21px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: transparent;
            border: none;

            &:hover {
                cursor: pointer;
            }
        }
        #btn-edit-photo-shadow {
            position: absolute;
            margin-top: -28px;
            margin-left: 72px;
            height: 21px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: transparent;
            border: none;

            &:hover {
                cursor: pointer;
            }
        }
    }
`;
