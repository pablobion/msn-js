import React from "react";

import { Container } from "./styles";

//components
import Header from "./components/header/index";
import SideBar from "./components/sidebar";
import Contacts from "./components/contacts";

const home = () => {
    return (
        <Container>
            <div>
                <Header />
            </div>
            <div id="contacts-div">
                <SideBar />
                <Contacts />
            </div>
        </Container>
    );
};

export default home;
