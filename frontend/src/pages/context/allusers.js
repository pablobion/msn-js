import React, { createContext, useState, useContext, useEffect, useRef } from "react";

import { socket } from "../../configs/socket_export";

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [contactsOnline, setContactsOnline] = useState([]);
    const [countContactsOnline, setCountContactsOnline] = useState(0);
    const [userChats, setUserChats] = useState([]);
    const [theme, setTheme] = useState("blue");
    const [mode, setMode] = useState("login");
    const [language, setLanguage] = useState("br");

    const chatRefText = useRef([]);
    const chatRef = useRef([]);
    const multiChatRef = useRef([]);

    useEffect(() => {
        setTheme(`${localStorage.getItem("msn-theme")}`);
        socket.on("socketsConnected", (data) => {
            setContactsOnline(data);
        });

        socket.on("socketsConnectedCounter", (data) => {
            if (data - 1 < 0) {
                setCountContactsOnline(0);
            } else {
                setCountContactsOnline(data - 1);
            }
        });

        socket.on("refresh multi chats", (data) => {
            setUserChats(data);
        });
    }, []);

    const getPerson = (socketid) => {
        if (contactsOnline) {
            let person = contactsOnline.find((elem) => elem.socketid === socketid);
            return person;
        }
    };

    const getUser = async (socketid) => {
        if (await contactsOnline) {
            let person = contactsOnline.find((elem) => elem.socketid === socketid);
            return person;
        }
    };

    const changeLanguage = (language) => {
        setLanguage(language);
        localStorage.setItem("msn-language", language);
    };

    const changeTheme = () => {
        if (theme === "blue") {
            setTheme("pink");
            localStorage.setItem("msn-theme", "pink");
        } else if (theme === "pink") {
            localStorage.setItem("msn-theme", "yellow");
            setTheme("yellow");
        } else if (theme === "yellow") {
            localStorage.setItem("msn-theme", "green");
            setTheme("green");
        } else if (theme === "green") {
            localStorage.setItem("msn-theme", "blue");
            setTheme("blue");
        } else {
            localStorage.setItem("msn-theme", "yellow");
            setTheme("yellow");
        }
    };

    return (
        <UserContext.Provider
            value={{
                contactsOnline,
                countContactsOnline,
                userChats,
                getPerson,
                getUser,
                theme,
                changeTheme,
                mode,
                setMode,
                chatRefText,
                chatRef,
                multiChatRef,
                language,
                changeLanguage,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");

    const { contactsOnline, countContactsOnline, userChats, getPerson, getUser, theme, changeTheme, mode, setMode, chatRefText, chatRef, multiChatRef, language, changeLanguage } = context;

    return { contactsOnline, countContactsOnline, userChats, getPerson, getUser, theme, changeTheme, mode, setMode, chatRefText, chatRef, multiChatRef, language, changeLanguage };
}
