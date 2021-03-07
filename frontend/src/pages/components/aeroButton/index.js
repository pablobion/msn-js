import React from "react";
import { Button } from "./styles";

const AeroButton = ({ children, id, className, onCustomClick, disabled, datatip, onMouseOver, onMouseOut }) => {
    return (
        <Button data-tip={datatip} id={id} onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={className} onClick={onCustomClick} disabled={disabled}>
            {children}
        </Button>
    );
};

export default AeroButton;
