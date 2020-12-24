import React, { useState, useEffect } from "react";

import { Container } from "./styles";

//icons
import { BiSearch } from "react-icons/bi";

//images
import addcontact from "./assets/add-contact.png";
import sortContacts from "./assets/sort-contacts.png";

//components
import AeroButton from "../../../components/aeroButton/index";
import Contact from "./components/contact/index";

import { socket } from "../../../../configs/socket_export";

const Contacts = () => {
    const [contactsOnline, setContactsOnline] = useState();

    useEffect(() => {
        socket.on("socketsConnected", (data) => {
            setContactsOnline(data.length);
        });
    }, []);

    return (
        <Container>
            <div id="search-contacts">
                <input type="text"></input>
                <AeroButton className="button">
                    <BiSearch color="gray" />
                </AeroButton>
                <AeroButton className="button">
                    <img src={addcontact} alt="" />
                </AeroButton>
                <AeroButton className="button">
                    <img src={sortContacts} alt="" />
                </AeroButton>
            </div>
            <div id="contacts-list">
                <details className="contacts-group-list">
                    <summary>Online ({contactsOnline})</summary>
                    <div id="contacts-group-list-contacts">
                        <Contact onClick={() => alert("oi")} status="busy"></Contact>
                        <Contact onClick={() => alert("oi")} status="online"></Contact>
                        <Contact onClick={() => alert("oi")} status="away"></Contact>
                    </div>
                </details>
            </div>
        </Container>
    );
};

export default Contacts;
