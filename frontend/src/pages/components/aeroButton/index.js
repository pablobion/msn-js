import React from "react";

import { Button } from "./styles";

const aeroButton = (props) => {
    return (
        <Button id={props.id} className={props.className}>
            {props.children}
        </Button>
    );
};

export default aeroButton;
