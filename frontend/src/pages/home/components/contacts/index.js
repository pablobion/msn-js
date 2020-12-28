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
    const [countContactsOnline, setCountContactsOnline] = useState();

    useEffect(() => {
        socket.on("socketsConnected", (data) => {
            setCountContactsOnline(data.length);
            setContactsOnline(data);
            console.log(contactsOnline);
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
                    <summary>Online ({countContactsOnline})</summary>
                    <div id="contacts-group-list-contacts">
                        {contactsOnline.map((elem) => (
                            <Contact username={elem.username} status={elem.status} subnick={elem.subnick} />
                        ))}
                    </div>
                </details>
            </div>
        </Container>
    );
};

export default Contacts;
