import React from "react";

import { Container } from "./styles";

//components
import Header from "./components/header/index";
import SideBar from "./components/sidebar";

const home = () => {
    return (
        <Container>
            <div>
                <Header />
            </div>

            <SideBar />
        </Container>
    );
};

export default home;
