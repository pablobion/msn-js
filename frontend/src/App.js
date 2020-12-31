import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import GlobalStyle from "./styles/global";

//components
import MultiChats from "../src/pages/multiChats/index";

//pages
import Home from "./pages/home/index";
import Chat from "./pages/chat/index";
import Login from "./pages/login/index";

//context
import { useUser } from "./pages/context/allusers";

function App() {
    const { userChats } = useUser();
    const [visible, setVisible] = useState(true);

    const closeChat = (event) => {};

    const createChat = () => {
        return <h1>ssss</h1>;
    };

    return (
        <Container id="myDIV">
            <Home />

            {userChats &&
                userChats.map((socketid) => (
                    <>
                        <Chat key={socketid} id={socketid} visible={visible} onCustomClick={() => closeChat()}></Chat>
                    </>
                ))}

            {/* <Login /> */}
            <div id="multi-chats">
                {userChats &&
                    userChats.map((socketid) => (
                        <>
                            <MultiChats key={socketid} id={socketid} onCustomClick={() => createChat()} />
                        </>
                    ))}
            </div>
            <GlobalStyle />
        </Container>
    );
}

export default App;
