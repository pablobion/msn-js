import React, { useEffect, useState } from "react";

import { Profile, Navbar } from "./styles";

//images profile
import SmallArrowWhite from "./assets/small-arrow.svg";

//images navbar
import navbarNews from "./assets/navbar/navbar-news.png";
import navbarColors from "./assets/navbar/navbar-colors.png";
import navbarMail from "./assets/navbar/navbar-mail.png";
import navbarContacts from "./assets/navbar/navbar-contacts.png";

//icons
import { BsPencil } from "react-icons/bs";

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

const Header = () => {
    const { getUser, theme, changeTheme } = useUser();
    const [person, setPerson] = useState();

    const handleChangeStatus = async (e) => {
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

    return (
        <>
            <Profile color={theme}>
                <NavBar />
                <div id="profile">
                    <div id="left">
                        {person ? <Borderavatar avatar={person.avatar} size="64" status={person.status} minus="19" top="2px" left="2px"></Borderavatar> : <Borderavatar avatar="https://i.imgur.com/hIbb87P.png" size="64" status="online" minus="19" top="2px" left="2px"></Borderavatar>}

                        <ModalCropUpdate id="btn-edit-photo">
                            <button id="btn-edit-photo" onClick={() => <Crop />}>
                                <BsPencil size={15} color="white" />
                            </button>
                        </ModalCropUpdate>
                    </div>
                    <div id="right">
                        <span className="span-username">
                            {person ? <p id="username">{person.username}</p> : <p id="username">n/a</p>}

                            <small>
                                <select onChange={(e) => handleChangeStatus(e)}>
                                    <option value="online">(Online)</option>
                                    <option value="busy">(Ocupado)</option>
                                    <option value="away">(Ausente)</option>
                                    <option value="invisible">(Offline)</option>
                                </select>
                            </small>
                        </span>
                        <AeroButton id="sub-nick" disabled="true">
                            <form onSubmit={(e) => sendSubnick(e)}>
                                <input type="text" id="myInput-subnick" onBlur={(e) => sendSubnick(e)}></input>
                            </form>
                        </AeroButton>
                    </div>
                </div>
            </Profile>
            <Navbar color={theme}>
                <div id="left">
                    <AeroButton className="button" disabled="true">
                        <img src={navbarMail} alt="" />
                    </AeroButton>
                    <AeroButton className="button" disabled="true">
                        <img src={navbarContacts} alt="" />
                    </AeroButton>
                    <AeroButton className="button" disabled="true">
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
