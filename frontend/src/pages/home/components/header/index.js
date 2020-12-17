import React from "react";

import { Container } from "./styles";

//images
import Logo from "./assets/live-logo.png";
import TitleText from "./assets/title-text.png";
import BorderPhoto from "./assets/border-photo.png";
import SmallArrowWhite from "./assets/small-arrow.svg";
import Avatar from "./assets/avatar2.jpg";

const header = () => {
    return (
        <>
            <Container>
                <div id="nav">
                    <img src={Logo} alt="" />
                    <img src={TitleText} alt="" />
                </div>
                <div id="profile">
                    <div id="left">
                        <img src={BorderPhoto} alt="" id="border-avatar" />
                        <div id="avatar-div">
                            <img src={Avatar} alt="" id="avatar" />
                        </div>
                    </div>
                    <div id="right">
                        <button>
                            <p>Pablo Bion</p>
                            <small>(Ocupado)</small>
                            <img src={SmallArrowWhite} alt="" />
                        </button>
                        <input id="sub-nick"></input>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default header;
