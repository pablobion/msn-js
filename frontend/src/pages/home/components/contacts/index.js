import React from "react";
//icons and images
import { BiSearch } from "react-icons/bi";
import { socket } from "../../../../configs/socket_export";
//components
import AeroButton from "../../../components/aeroButton/index";
//context
import { useUser } from "../../../context/allusers";
import addcontact from "./assets/add-contact.png";
import sortContacts from "./assets/sort-contacts.png";
import Contact from "./components/contact/index";
import { Container } from "./styles";

const Contacts = () => {
    const { contactsOnline, countContactsOnline, language } = useUser();

    return (
        <Container>
            <div id="search-contacts">
                <input type="text"></input>
                <AeroButton className="button" disabled={true}>
                    <BiSearch color="gray" />
                </AeroButton>
                <AeroButton className="button" disabled={true}>
                    <img src={addcontact} alt="" />
                </AeroButton>
                <AeroButton className="button" disabled={true}>
                    <img src={sortContacts} alt="" />
                </AeroButton>
            </div>
            <div id="contacts-list">
                <details className="contacts-group-list">
                    <summary>Online ({countContactsOnline})</summary>
                    <div id="contacts-group-list-contacts">
                        {contactsOnline &&
                            contactsOnline.map((elem) => {
                                if (socket.id === elem.socketid) {
                                    return <Contact username={elem.username} status={elem.status} subnick={elem.subnick} socketid={elem.socketid} key={elem.socketid} music={elem.music} disabled={true} />;
                                }
                                if (elem.status !== "invisible") {
                                    return <Contact username={elem.username} status={elem.status} subnick={elem.subnick} socketid={elem.socketid} key={elem.socketid} music={elem.music} disabled={false} />;
                                }
                            })}
                        <small style={{ color: "darkgray", height: "100%" }}>{language === "br" ? "* Usuários onlines aparecerão nesta lista." : "* Online users will appear in this list."}</small>
                    </div>
                </details>
            </div>
        </Container>
    );
};

export default Contacts;
