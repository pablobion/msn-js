import React, { useEffect, useState } from "react";
//icons
import { BsMusicNoteBeamed, BsPencil } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { ImExit } from "react-icons/im";
//tooltip
import ReactTooltip from "react-tooltip";
//configs
import { config } from "../../../../configs/config_connections";
//socket
import { socket } from "../../../../configs/socket_export";
//components
import AeroButton from "../../../components/aeroButton/index";
import Borderavatar from "../../../components/modalBorder/index";
import ModalCropUpdate from "../../../components/modalCropUpdate";
import Crop from "../../../components/modalCropUpdate/components/crop/index";
import NavBar from "../../../components/navbar/index";
//context
import { useUser } from "../../../context/allusers";
//images
import brasil from "./assets/brazil.svg";
import navbarColors from "./assets/navbar/navbar-colors.png";
import navbarContacts from "./assets/navbar/navbar-contacts.png";
import navbarMail from "./assets/navbar/navbar-mail.png";
//images navbar
import navbarNews from "./assets/navbar/navbar-news.png";
import usa from "./assets/united-states.svg";
import { Navbar, Profile } from "./styles";

const configs = config();

const Header = () => {
    const { getUser, theme, changeTheme, language, changeLanguage, setMode } = useUser();
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
    const logout = () => {
        if (localStorage.getItem("saveUser")) {
            let infos = JSON.parse(localStorage.getItem("saveUser"));
            const username = infos.username;
            const avatar = infos.avatar;
            localStorage.setItem("saveUser", JSON.stringify({ username: username, avatar, autologin: false }));
        }
        socket.emit("change status user", "invisible");
        setMode("login");
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
        window.open(`http://${configs.ipServer}/routes/spotify/login?socketid=${socket.id}`, "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");
    };

    return (
        <>
            <ReactTooltip multiline="true" />
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
                            <div>
                                {person ? <p id="username">{person.username}</p> : <p id="username">Não informado</p>}

                                <small>
                                    <select onChange={(e) => handleChangeStatus(e)}>
                                        <option value="" disabled selected>
                                            {language === "br" ? "(Mude seu status)" : "(Change your status)"}
                                        </option>
                                        <option value="online">(Online)</option>
                                        <option value="busy">{language === "br" ? "(Ocupado)" : "(Busy)"}</option>
                                        <option value="away">{language === "br" ? "(Ausente)" : "(Away)"}</option>
                                        <option value="invisible">(Offline)</option>
                                    </select>
                                </small>
                            </div>
                            <div>
                                <img onClick={() => changeLanguage("br")} className="country-flag" src={brasil} alt="" />
                                <img onClick={() => changeLanguage("en")} className="country-flag" src={usa} alt="" />
                                <div style={{ marginLeft: 30, cursor: "pointer" }}>
                                    <ImExit onClick={logout} size={30} />
                                </div>
                            </div>
                        </span>

                        <div id="div-subnick">
                            <AeroButton datatip={language === "br" ? "Clique para inserir a musica<br /> que está ouvindo agora no spotify." : "Click to insert the song <br /> you are listening to now on spotify."} onCustomClick={() => menuSubnick()}>
                                <FaSpotify size="20" color="white" />
                                <p style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {language === "br" ? "Conectar" : "Connect"}
                                    <BsMusicNoteBeamed size={15} style={{ marginLeft: 5 }} />
                                </p>
                            </AeroButton>
                            <AeroButton id="sub-nick">
                                <form onSubmit={(e) => sendSubnick(e)}>
                                    <input placeholder={language === "br" ? "Insira seu subnick aqui" : "Insert your subnick here"} type="text" id="myInput-subnick" onBlur={(e) => sendSubnick(e)}></input>
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
