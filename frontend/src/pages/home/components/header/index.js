import React from "react";

import { Profile, Navbar } from "./styles";

//images profile
import SmallArrowWhite from "./assets/small-arrow.svg";
import Avatar from "./assets/avatar2.jpg";

//images navbar
import navbarNews from "./assets/navbar/navbar-news.png";
import navbarColors from "./assets/navbar/navbar-colors.png";
import navbarMail from "./assets/navbar/navbar-mail.png";
import navbarContacts from "./assets/navbar/navbar-contacts.png";

//components
import AeroButton from "../../../components/aeroButton/index";
import Borderavatar from "../../../components/modalBorder/index";
import NavBar from "../../../components/navbar/index";

const header = () => {
    return (
        <>
            <Profile>
                <NavBar />
                <div id="profile">
                    <div id="left">
                        <Borderavatar avatar={Avatar} size="32" status="online"></Borderavatar>
                    </div>
                    <div id="right">
                        <AeroButton className="button">
                            <p id="username">Pablo Bion</p>
                            <small>(Ocupado)</small>
                            <img src={SmallArrowWhite} alt="" />
                        </AeroButton>
                        <AeroButton id="sub-nick">
                            <input></input>
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

export default header;
