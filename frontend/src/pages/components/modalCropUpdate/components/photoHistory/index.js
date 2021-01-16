import React, { useEffect, useState } from "react";

import { Container } from "./styles";

//components
import ModalBorder from "../../../modalBorder";

//images
import Logo from "./assets/msn-logo.png";
import Praia from "./assets/7.webp";

const PhotoHistory = (props) => {
    const [photos, setPhotos] = useState();
    const [photoFocus, setPhotoFocus] = useState();
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("photosHistory"))) {
            console.log(JSON.parse(localStorage.getItem("photosHistory")));
            setPhotos(JSON.parse(localStorage.getItem("photosHistory")));
        }
    }, []);

    return (
        <Container>
            <div id="header">
                <p>
                    <img src={Logo} alt="" />
                    Imagem para Exibição
                </p>
                <p id="title-header">Selecione uma Imagem para exibição</p>
                <small>Escolha como você deseja aparecer no Messenger.</small>
            </div>
            <div id="mid">
                <div id="left">
                    <h5>Imagens comuns</h5>

                    <div id="photos-galary">
                        <h5>Imagens comuns</h5>
                        <button
                            onClick={() => {
                                setPhotoFocus(Praia);
                                console.log(photoFocus);
                            }}
                        >
                            <img src={Praia} alt="" />
                        </button>

                        <button
                            onClick={() => {
                                setPhotoFocus(Logo);
                                console.log(photoFocus);
                            }}
                        >
                            <img src={Logo} alt="" />
                        </button>
                    </div>
                </div>
                <div id="right">
                    <ModalBorder avatar={photoFocus} minus="29" top="-10px" left="2px" />
                    <button onClick={props.custom}>Custom</button>
                </div>
            </div>
            <div id="bottom">
                <button>OK</button>
                <button>Fechar</button>
            </div>

            {/* <h1>Avatares Disponiveis</h1>
            <h1>Ultimas custom photos utilizadas</h1>
            {photos.map((elem) => (
                <img src={elem} />
            ))}
            <button onClick={() => console.log(photos)}>asdadsasd</button> */}
        </Container>
    );
};

export default PhotoHistory;
