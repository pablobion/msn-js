import React, { createContext, useState, useContext, useEffect } from "react";

import { socket } from "../../configs/socket_export";

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [contactsOnline, setContactsOnline] = useState();
    const [countContactsOnline, setCountContactsOnline] = useState();
    const [userChats, setUserChats] = useState();

    useEffect(() => {
        socket.on("socketsConnected", (data) => {
            setCountContactsOnline(data.length - 1);
            setContactsOnline(data);

            console.log(contactsOnline);
        });

        socket.on("refresh multi chats", (data) => {
            setUserChats(data);
        });
    }, []);

    return (
        <UserContext.Provider
            value={{
                contactsOnline,
                countContactsOnline,
                userChats,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");

    const { contactsOnline, countContactsOnline, userChats } = context;

    return { contactsOnline, countContactsOnline, userChats };
}
