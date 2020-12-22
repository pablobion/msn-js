import React from "react";

import { Container } from "./styles";

//images

import border from "./assets/border-photo-large.png";

const persons = () => {
    return (
        <Container>
            <img src={border} alt="" />
            <img src={border} alt="" />
        </Container>
    );
};

export default persons;
