import React from "react";

import { Container } from "./styles";

//images profile
import Logo from "./assets/live-logo.png";
import TitleText from "./assets/title-text.png";

const navbar = () => {
    return (
        <Container>
            <img src={Logo} alt="" />
            <img src={TitleText} alt="" />
        </Container>
    );
};

export default navbar;
