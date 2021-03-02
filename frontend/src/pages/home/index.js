import React from "react";
//images
import ad from "./assets/ad.png";
import Contacts from "./components/contacts";
//components
import Header from "./components/header/index";
import SideBar from "./components/sidebar";
import { Container } from "./styles";

const Home = React.forwardRef((props, ref) => {
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
