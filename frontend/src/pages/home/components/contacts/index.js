import React, { useState, useEffect } from "react";

import { Container } from "./styles";

//icons and images
import { BiSearch } from "react-icons/bi";
import addcontact from "./assets/add-contact.png";
import sortContacts from "./assets/sort-contacts.png";

//components
import AeroButton from "../../../components/aeroButton/index";
import Contact from "./components/contact/index";

//context
import { useUser } from "../../../context/allusers";
import { socket } from "../../../../configs/socket_export";

const Contacts = () => {
    const { contactsOnline, countContactsOnline } = useUser();

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
                        {contactsOnline &&
                            contactsOnline.map((elem) => {
                                if (socket.id !== elem.socketid) {
                                    return (
                                        <Contact
                                            username={elem.username}
                                            status={elem.status}
                                            subnick={elem.subnick}
                                            socketid={elem.socketid}
                                            key={elem.socketid}
                                        />
                                    );
                                }
                            })}
                    </div>
                </details>
            </div>
        </Container>
    );
};

export default Contacts;
