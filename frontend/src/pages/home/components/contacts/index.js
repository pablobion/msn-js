import React from "react";

import { Container } from "./styles";

//icons
import { BiSearch } from "react-icons/bi";

//images
import addcontact from "./assets/add-contact.png";
import sortContacts from "./assets/sort-contacts.png";

//components
import AeroButton from "../../../components/aeroButton/index";

const contacts = () => {
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
                <details>
                    <summary>Open me!</summary>
                    <h1>dds</h1>
                </details>
            </div>
        </Container>
    );
};

export default contacts;
