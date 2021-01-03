import React from "react";

import { Container } from "./styles";

//components
import ModalBorder from "../../../components/modalBorder/index";

const Persons = (props) => {
    return (
        <Container>
            <ModalBorder size="96" status={props.statusPerson} />
            <ModalBorder size="96" status={props.statusUser} />
        </Container>
    );
};

export default Persons;
