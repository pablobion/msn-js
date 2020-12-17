import React from "react";

import { Container } from "./styles";

//images
import msnLogo from "./assets/msn-logo.png";

//components
import AeroButton from "../../../components/aeroButton/index";

const sidebar = () => {
    return (
        <Container>
            <AeroButton className="button">
                <img src={msnLogo} alt="" />
            </AeroButton>
            <AeroButton className="button">
                <img src={msnLogo} alt="" />
            </AeroButton>
            <AeroButton className="button">
                <img src={msnLogo} alt="" />
            </AeroButton>
        </Container>
    );
};

export default sidebar;
