import React from "react";

import { Container, Button } from "./styles";

//components
import Crop from "./components/crop";

const ModalCropUpdate = (props) => {
    const handleClickOpen = () => {
        document.getElementById("myModal").style.display = "block";
    };

    const handleClickClose = () => {
        document.getElementById("myModal").style.display = "none";
    };

    return (
        <>
            <Button id="myBtn" onClick={handleClickOpen}>
                {props.children}
            </Button>
            <Container id="myModal">
                <div className="modal-content">
                    <span className="close" onClick={handleClickClose}>
                        &times;
                    </span>
                    <Crop />
                </div>
            </Container>
        </>
    );
};

export default ModalCropUpdate;
