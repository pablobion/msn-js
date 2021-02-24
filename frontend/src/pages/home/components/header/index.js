import React, { useEffect, useState } from "react";

import { Profile, Navbar } from "./styles";

//images navbar
import navbarNews from "./assets/navbar/navbar-news.png";
import navbarColors from "./assets/navbar/navbar-colors.png";
import navbarMail from "./assets/navbar/navbar-mail.png";
import navbarContacts from "./assets/navbar/navbar-contacts.png";

//icons
import { BsPencil } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { BsMusicNoteBeamed } from "react-icons/bs";

//components
import AeroButton from "../../../components/aeroButton/index";
import Borderavatar from "../../../components/modalBorder/index";
import NavBar from "../../../components/navbar/index";
import ModalCropUpdate from "../../../components/modalCropUpdate";

import Crop from "../../../components/modalCropUpdate/components/crop/index";

//socket
import { socket } from "../../../../configs/socket_export";

//context
import { useUser } from "../../../context/allusers";

//configs
import { config } from "../../../../configs/config_connections";

const configs = config();

const Header = () => {
    const { getUser, theme, changeTheme } = useUser();
    const [person, setPerson] = useState();

    const handleChangeStatus = async (e) => {
        if (e.target.value === "online") {
            if (JSON.parse(localStorage.getItem("saveUser"))) {
                let avatar = JSON.parse(localStorage.getItem("saveUser")).avatar; // pega o avatar que esta em local storage
                socket.emit("socket connected notification", { avatar }); // faz um emit pro serivdor
            } else {
                socket.emit("socket connected notification", { avatar: person.avatar }); // faz um emit pro serivdor
            }
        }
        socket.emit("change status user", e.target.value);
    };

    const sendSubnick = (event) => {
        event.preventDefault();
        const input = document.getElementById("myInput-subnick");
        input.blur();
        socket.emit("change subnick user", input.value);
    };

    useEffect(() => {
        socket.on("return subnick user", (data) => {
            const input = document.getElementById("myInput-subnick");
            input.value = data;
        });

        (async function () {
            setPerson(await getUser(socket.id));
        })();
    });

    const menuSubnick = async () => {
        const child = window.open(`http://${configs.ipServer}/routes/spotify/login?socketid=${socket.id}`, "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");

        // setTimeout(() => {
        //     child.close();
        //     alert("Spotify Conectado");
        // }, 1000);
    };

    return (
        <>
            <Profile color={theme}>
                <NavBar />
                <div id="profile">
                    <div id="left">
                        {person ? <Borderavatar avatar={person.avatar} size="64" status={person.status} minus="19" top="2px" left="2px"></Borderavatar> : <Borderavatar avatar="" size="64" status="online" minus="19" top="2px" left="2px"></Borderavatar>}
                        <button id="btn-edit-photo-shadow">
                            <BsPencil size={20} color="white" />
                        </button>
                        <ModalCropUpdate id="btn-edit-photo">
                            <button id="btn-edit-photo" onClick={() => <Crop />}>
                                <BsPencil size={20} color="#454545" />
                            </button>
                        </ModalCropUpdate>
                    </div>
                    <div id="right">
                        <span className="span-username">
                            {person ? <p id="username">{person.username}</p> : <p id="username">Não informado</p>}

                            <small>
                                <select onChange={(e) => handleChangeStatus(e)}>
                                    <option value="" disabled selected>
                                        (Mude seu status)
                                    </option>
                                    <option value="online">(Online)</option>
                                    <option value="busy">(Ocupado)</option>
                                    <option value="away">(Ausente)</option>
                                    <option value="invisible">(Offline)</option>
                                </select>
                            </small>
                        </span>
                        <div id="div-subnick">
                            <AeroButton onCustomClick={() => menuSubnick()}>
                                <FaSpotify size="20" color="white" />
                                <p style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    Conectar
                                    <BsMusicNoteBeamed size={15} style={{ marginLeft: 5 }} />
                                </p>
                            </AeroButton>
                            <AeroButton id="sub-nick">
                                <form onSubmit={(e) => sendSubnick(e)}>
                                    <input placeholder="Insira seu subnick aqui" type="text" id="myInput-subnick" onBlur={(e) => sendSubnick(e)}></input>
                                </form>
                            </AeroButton>
                        </div>
                    </div>
                </div>
            </Profile>
            <Navbar color={theme}>
                <div id="left">
                    <AeroButton className="button" disabled={true}>
                        <img src={navbarMail} alt="" />
                    </AeroButton>
                    <AeroButton className="button" disabled={true}>
                        <img src={navbarContacts} alt="" />
                    </AeroButton>
                    <AeroButton className="button" disabled={true}>
                        <img src={navbarNews} alt="" />
                    </AeroButton>
                </div>
                <div id="right">
                    <AeroButton className="button" onCustomClick={() => changeTheme()}>
                        <img src={navbarColors} alt="" />
                    </AeroButton>
                </div>
            </Navbar>
        </>
    );
};

export default Header;
