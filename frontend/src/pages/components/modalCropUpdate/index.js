import React, { useState, useEffect } from "react";

import { Container, Button } from "./styles";

//components
import Crop from "./components/crop";
import PhotoHistory from "./components/photoHistory";

const ModalCropUpdate = (props) => {
    const [deafult, setDefault] = useState(true);

    const handleClickOpen = () => {
        document.getElementById("myModal").style.display = "block";
        setDefault(true);
    };

    const handleClickClose = () => {
        document.getElementById("myModal").style.display = "none";
        setDefault(true);
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
                    {deafult ? (
                        <>
                            <PhotoHistory custom={() => setDefault(false)} />
                        </>
                    ) : (
                        <Crop close={handleClickClose} />
                    )}
                </div>
            </Container>
        </>
    );
};

export default ModalCropUpdate;
