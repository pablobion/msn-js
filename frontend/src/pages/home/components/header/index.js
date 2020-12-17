import React from "react";

import { Container } from "./styles";

//images
import Logo from "./assets/live-logo.png";
import TitleText from "./assets/title-text.png";
import BorderPhoto from "./assets/border-photo.png";
import Background from "./assets/background-large.png";

const header = () => {
    return (
        <>
            <Container>
                {/* <img src={Background} alt="" id="background" /> */}
                <div id="nav">
                    <img src={Logo} alt="" />
                    <img src={TitleText} alt="" />
                </div>
                <div id="profile">
                    <div id="left">
                        <img src={BorderPhoto} alt="" />
                    </div>
                    <div id="right"></div>
                </div>
            </Container>
        </>
    );
};

export default header;
