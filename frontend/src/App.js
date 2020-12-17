import React, { useState } from "react";
import { Container } from "./styles";
import GlobalStyle from "./styles/global";
//pages
import Home from "./pages/home/index";

function App() {
    return (
        <Container>
            <Home />
            <GlobalStyle />
        </Container>
    );
}

export default App;
