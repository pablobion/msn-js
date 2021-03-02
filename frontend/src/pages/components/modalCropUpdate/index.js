import React, { useState } from "react";
//components
import Crop from "./components/crop";
import PhotoHistory from "./components/photoHistory";
import { Buttons, Container } from "./styles";

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
            <Buttons className={props.className} id="myBtn" onClick={handleClickOpen}>
                {props.children}
            </Buttons>
            <Container id="myModal">
                <div className="modal-content">
                    <span className="close" onClick={handleClickClose}>
                        &times;
                    </span>
                    {deafult ? (
                        <>
                            <PhotoHistory custom={() => setDefault(false)} close={handleClickClose} />
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
