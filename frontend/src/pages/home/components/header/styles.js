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
            display: flex;
            align-items: center;
            justify-content: center;

            #border-avatar {
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

                img {
                    width: 48px;
                }
            }
        }
        #right {
            margin-left: 10px;
            width: 100%;
            button {
                background: transparent;
                height: 27px;
                color: white;
                display: flex;
                align-items: center;
                border: 1px solid transparent;
                padding-left: 5px;

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
                }
            }

            button:hover {
                border: 1px solid whitesmoke;
                border-radius: 5px;
            }

            #sub-nick {
                padding: 5px;
                margin-bottom: 10px;
                color: #b9dde7;
                border: none;
                background: transparent;
                width: 90%;
                font-size: 7pt;
                border: 1px solid transparent;

                &:hover {
                    border: 1px solid whitesmoke;
                    border-radius: 5px;
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

    #left {
        height: 100%;
        button {
            border: none;
            background: transparent;
            padding: 5px;

            height: 100%;

            img {
                height: 100%;
            }
        }
    }

    #right {
        height: 100%;
        button {
            border: none;
            background: transparent;
            padding: 5px;

            height: 100%;

            img {
                height: 100%;
            }

            #arrow {
                width: 10px;
            }
        }
    }
`;
