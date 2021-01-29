import React from "react";

import { Container } from "./styles";

//images
import msnLogo from "./assets/msn-logo.png";

//icons
import { AiOutlineClose } from "react-icons/ai";

//components
import ModalBorder from "../../components/modalBorder/index";

const PersonWindowLogin = React.forwardRef((props, ref) => {
    return (
        <Container ref={ref} className={props.class}>
            <div id="header">
                <img src={msnLogo} alt="msn logo" />
                <p>Windows Live MessengerJS</p>
                <AiOutlineClose />
            </div>
            <div id="body">
                <ModalBorder size="32" minus="12" left="4px" top="4px" />
                <div id="body-username">
                    <p>asojdsoijsdiadsjidjs1234567890</p>
                    <p>acabou de entrar.</p>
                </div>
            </div>
        </Container>
    );
});

export default PersonWindowLogin;
