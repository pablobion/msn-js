import { socket, connect } from "../configs/socket_export";

export const sendmessage = ({ chatRefText, chatRef, multiChatRef, message, socketidUser, socketidPerson, chatopen }) => {
    if (!chatRefText.current) return false;
    if (!socketidUser) return alert("Houve um erro ao enviar sua mensaem.");
    const indexPersonChat = chatRefText.current.findIndex((elem) => elem.id === socketidPerson);
    const indexUserChat = chatRefText.current.findIndex((elem) => elem.id === socketidUser);

    if (chatRefText.current[indexUserChat]) chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<p id="chat-usarname">${socketidUser} diz:</p><p id="chat-textmessage">${message}</p>`);
    if (chatRefText.current[indexPersonChat]) chatRefText.current[indexPersonChat].insertAdjacentHTML("beforeend", `<p id="chat-usarname">${socketidUser} diz:</p><p id="chat-textmessage">${message}</p>`);

    if (chatopen === false) {
        //verificando se o chat estava aberto, se caso não, deixa ele laranja
        const indexPersonMultiChat = multiChatRef.current.findIndex((elem) => `${elem.id}` === `${socketidUser}-multichat`);
        if (chatRefText.current[indexPersonMultiChat]) multiChatRef.current[indexPersonMultiChat].style = "background-color: orange;";
    }
};

export const drawAttention = ({ chatRefText, chatRef, multiChatRef, data }) => {
    const indexPersonMultiChat = multiChatRef.current.findIndex((elem) => `${elem.id}` === `${data}-multichat`);
    const indexPersonChat = chatRefText.current.findIndex((elem) => elem.id === data);

    if (multiChatRef.current[indexPersonMultiChat]) multiChatRef.current[indexPersonMultiChat].style = "background-color: tomato;animation: shake 0.5s;";

    if (chatRef.current[indexPersonChat]) chatRef.current[indexPersonChat].style = "animation: shake 0.5s; top: 100px; left: 100px; z-index: 1";

    setTimeout(() => {
        if (multiChatRef.current[indexPersonMultiChat]) multiChatRef.current[indexPersonMultiChat].style = "background-color: transparent;";
        if (chatRef.current[indexPersonChat]) chatRef.current[indexPersonChat].style = "animation: none; top: 100px; left: 100px;";
    }, 500);
};
