import React from "react";

import { Container } from "./styles";

//components
import ModalBorder from "../../../components/modalBorder/index";

const Persons = (props) => {
    return (
        <Container>
            <ModalBorder size="96" status={props.statusPerson} avatar="https://i.imgur.com/hIbb87P.png" minus="22" top="5px" left="5px" />
            <ModalBorder size="96" status={props.statusUser} minus="22" top="5px" left="5px" />
        </Container>
    );
};

export default Persons;
