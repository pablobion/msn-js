import React, { useEffect } from "react";

import { Profile, Navbar } from "./styles";

//images profile
import SmallArrowWhite from "./assets/small-arrow.svg";
import Avatar from "./assets/avatar3.png";

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

import Crop from "../../../crop/index";

//socket
import { socket } from "../../../../configs/socket_export";

const Header = () => {
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
    }, []);

    return (
        <>
            <Profile>
                <NavBar />
                <div id="profile">
                    <div id="left">
                        <Borderavatar avatar={Avatar} size="64" status="online"></Borderavatar>
                        <button id="btn-edit-photo" onClick={() => <Crop />}>
                            <BsPencil id="btn-edit-photo-icons" size={15} color="white" />
                        </button>
                    </div>
                    <div id="right">
                        <span className="span-username">
                            <p id="username">Pablo Bion</p>
                            <small>
                                <select onChange={(e) => handleChangeStatus(e)}>
                                    <option value="online">(Online)</option>
                                    <option value="busy">(Ocupado)</option>
                                    <option value="away">(Ausente)</option>
                                    <option value="invisible">(Offline)</option>
                                </select>
                            </small>
                        </span>
                        <AeroButton id="sub-nick">
                            <form onSubmit={(e) => sendSubnick(e)}>
                                <input type="text" id="myInput-subnick" onBlur={(e) => sendSubnick(e)}></input>
                            </form>
                        </AeroButton>
                    </div>
                </div>
            </Profile>
            <Navbar>
                <div id="left">
                    <AeroButton className="button">
                        <img src={navbarMail} alt="" />
                    </AeroButton>
                    <AeroButton className="button">
                        <img src={navbarContacts} alt="" />
                    </AeroButton>
                    <AeroButton className="button">
                        <img src={navbarNews} alt="" />
                    </AeroButton>
                </div>
                <div id="right">
                    <AeroButton className="button">
                        <img src={navbarColors} alt="" />
                    </AeroButton>
                </div>
            </Navbar>
        </>
    );
};

export default Header;
