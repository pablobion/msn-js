import React from "react";
import { Button } from "./styles";

const AeroButton = ({ children, id, className, onCustomClick, disabled, datatip }) => {
    return (
        <Button data-tip={datatip} id={id} className={className} onClick={onCustomClick} disabled={disabled}>
            {children}
        </Button>
    );
};

export default AeroButton;
