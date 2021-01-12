import styled from "styled-components";

export const Profile = styled.div`
    padding: 10px;
    height: 100px;
    background-image: url("https://github.com/pablobion/msn-js/blob/master/frontend/src/pages/home/components/header/assets/background-large.png?raw=true");
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
        height: 80px;

        #left {
            margin-bottom: 15px;
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
    background-image: url("https://raw.githubusercontent.com/AndroidWG/WLMOnline/master/assets/background/msgres_navbar.png");
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
