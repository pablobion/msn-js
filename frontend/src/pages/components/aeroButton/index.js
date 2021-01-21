import React from "react";

import { Button } from "./styles";

const AeroButton = ({ children, id, className, onCustomClick, disabled }) => {
    return (
        <Button id={id} className={className} onClick={onCustomClick} disabled={disabled}>
            {children}
        </Button>
    );
};

export default AeroButton;
