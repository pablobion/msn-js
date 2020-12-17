import React, { useState } from "react";
import { Container } from "./styles";
import GlobalStyle from "./styles/global";

//pages
import Home from "./pages/home/index";
import Chat from "./pages/chat/index";

function App() {
    return (
        <Container>
            <Home />
            <Chat />
            <GlobalStyle />
        </Container>
    );
}

export default App;
