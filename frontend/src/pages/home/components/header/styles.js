import styled from "styled-components";

//images
import backgroundHeader from "./assets/background-large.png";
import backgroundHeaderNavbar from "./assets/background-large.png";

import backgroundHeaderPink from "./assets/background-large-pink.png";
import backgroundHeaderNavbarPink from "./assets/background-large-pink.png";

import backgroundHeaderYellow from "./assets/background-large-yellow.png";
import backgroundHeaderNavbarYellow from "./assets/background-large-yellow.png";

import backgroundHeaderGreen from "./assets/background-large-green.png";
import backgroundHeaderNavbarGreen from "./assets/background-large-green.png";

export const Profile = styled.div`
    padding: 10px;
    height: 130px;

    background-image: url(${backgroundHeader});
    ${(props) => {
        if (props.color === "blue")
            return `
            background-image: url(${backgroundHeader});
        `;

        if (props.color === "pink")
            return `
            background-image: url(${backgroundHeaderPink});
        `;

        if (props.color === "yellow")
            return `
            background-image: url(${backgroundHeaderYellow});
        `;

        if (props.color === "green")
            return `
            background-image: url(${backgroundHeaderGreen});
        `;
    }}

    background-repeat: no-repeat;
    background-size: 100% 100%;

    #nav {
        display: flex;
        align-items: center;
        img + img {
            margin-left: 10px;
        }
    }

    #profile {
        display: flex;
        align-items: center;
        height: 110px;
        padding-left: 3px;

        #left {
            margin-bottom: 15px;
            display: flex;

            #btn-edit-photo {
                padding-top: 80px;
                padding-left: 80px;
                padding-right: 10px;
                padding-bottom: 30px;
                position: absolute;
                margin-top: -56px;
                margin-left: -108px;

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
                margin-top: 55px;
                margin-left: 58px;
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
        #right {
            margin-left: 10px;
            width: 100%;

            .span-username {
                height: 27px;
                color: white;
                display: flex;
                align-items: center;
                padding-left: 5px;
                background: transparent;

                #username {
                    font-weight: 550;
                    font-size: 14px;
                }

                img {
                    width: 13px;
                    margin-left: 10px;
                }

                small {
                    margin-left: 10px;
                    color: MintCream;
                    color: #b9dde7;

                    select {
                        background: transparent;
                        border: none;
                        color: white;
                        & option {
                            margin: 40px;
                            background: rgba(0, 0, 0, 0.3);
                            color: #fff;
                            text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
                        }

                        &:hover {
                            border: white;
                        }
                    }
                }
            }
            #sub-nick {
                width: 90%;
                padding: 0px;
                margin-bottom: 10px;
                input {
                    color: #b9dde7;
                    background: transparent;
                    width: 100%;
                    font-size: 7pt;
                    border: 1px transparent;
                    height: 100%;
                    padding: 5px;
                    &:focus {
                        background: white;
                        color: black;
                    }
                }
            }
        }
    }
`;

export const Navbar = styled.div`
    background-image: url(${backgroundHeaderNavbar});
    ${(props) => {
        if (props.color === "blue")
            return `
            background-image: url(${backgroundHeaderNavbar});
        `;

        if (props.color === "pink")
            return `
            background-image: url(${backgroundHeaderNavbarPink});
        `;

        if (props.color === "yellow")
            return `
            background-image: url(${backgroundHeaderNavbarYellow});
        `;

        if (props.color === "green")
            return `
            background-image: url(${backgroundHeaderNavbarGreen});
        `;
    }}
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 30px;
    padding-left: 10px;
    padding-right: 5px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 1px 2px #00000077;
    margin-bottom: 3px;

    #left {
        height: 100%;
        .button {
            img {
                height: 100%;
            }
        }
    }

    #right {
        height: 100%;
        .button {
            img {
                height: 100%;
            }

            #arrow {
                width: 10px;
            }
        }
    }
`;
