import React, { useEffect } from "react";
//images
import ad from "./assets/ad.png";
import Contacts from "./components/contacts";
//components
import Header from "./components/header/index";
import SideBar from "./components/sidebar";
import { Container } from "./styles";
//context
import { useUser } from "../context/allusers";

import languages from "../../configs/languages";

const preventf5 = false;

const Home = React.forwardRef((props, ref) => {
    const { language } = useUser();

    const preventf5 = (e) => {
        if (e.keyCode == 116) {
            e.preventDefault();
            alert(languages[language].cant_update_from_keyboard)
        }
    };

    useEffect(() => {
        if (!preventf5) window.addEventListener("keydown", (e) => preventf5(e));
    }, []);

    return (
        <Container>
            <div>
                <Header />
            </div>
            <div id="contacts-div">
                <SideBar />
                <Contacts />
            </div>

            <div id="ad-div">
                <img src={ad} alt="" />
            </div>
        </Container>
    );
});

export default Home;
