import React from "react";
//images profile
import Logo from "./assets/live-logo.png";
import TitleText from "./assets/title-text.png";
import { Container } from "./styles";

const navbar = () => {
    return (
        <Container>
            <img src={Logo} alt="" />
            <img src={TitleText} alt="" />
        </Container>
    );
};

export default navbar;
