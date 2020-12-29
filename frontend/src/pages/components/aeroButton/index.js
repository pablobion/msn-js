import React from "react";

import { Button } from "./styles";

const AeroButton = ({ children, id, className, onCustomClick }) => {
    return (
        <Button id={id} className={className} onClick={onCustomClick}>
            {children}
        </Button>
    );
};

export default AeroButton;
