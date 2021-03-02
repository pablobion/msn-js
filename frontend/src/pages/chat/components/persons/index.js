import React from "react";
//icons
import { BsPencil } from "react-icons/bs";
//components
import ModalBorder from "../../../components/modalBorder/index";
import ModalCropUpdate from "../../../components/modalCropUpdate";
import Crop from "../../../components/modalCropUpdate/components/crop/index";
import { Container } from "./styles";

const Persons = (props) => {
    return (
        <Container>
            <ModalBorder size="96" status={props.statusPerson} avatar={props.avatarperson} minus="22" top="5px" left="5px" />
            <div>
                <ModalBorder size="96" status={props.statusUser} avatar={props.avataruser} minus="22" top="5px" left="5px" />
                <button id="btn-edit-photo-shadow">
                    <BsPencil size={20} color="white" />
                </button>
                <ModalCropUpdate>
                    <button id="btn-edit-photo" onClick={() => <Crop />}>
                        <BsPencil size={20} color="#454545" />
                    </button>
                </ModalCropUpdate>
            </div>
        </Container>
    );
};

export default Persons;
