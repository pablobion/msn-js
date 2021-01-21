import { socket, connect } from "../configs/socket_export";

//images
import nodraw from "../pages/chat/components/chatText/assets/nodraw.png";

let timeout = false;

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

export const drawAttention = ({ chatRefText, chatRef, multiChatRef, id, whosend, isend, statusperson }) => {
    const indexPersonMultiChat = multiChatRef.current.findIndex((elem) => `${elem.id}` === `${id}-multichat`);
    const indexPersonChat = chatRefText.current.findIndex((elem) => elem.id === id);
    const indexUserChat = chatRefText.current.findIndex((elem) => elem.id === id);

    if (!timeout) {
        timeout = true;
        setTimeout(() => {
            timeout = false;
        }, 5000);

        if (statusperson === "online") {
            //so faz animação se a pessa estiver online.
            if (isend) socket.emit("change visible chat draw attention", { socketiduser: socket.id, socketidperson: id }); // faz um emit para mostrar o chat pra pessoa caso ela esteja com status online
            if (multiChatRef.current[indexPersonMultiChat]) multiChatRef.current[indexPersonMultiChat].style = "background-color: tomato;animation: shake 0.5s;";
            if (chatRef.current[indexPersonChat]) chatRef.current[indexPersonChat].style = "animation: shake 0.5s; top: 100px; left: 100px";
        }

        if (chatRefText.current[indexUserChat]) chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<p>—————————</p><p id="chat-usarname">${whosend} acabou de chamar a atenção.</p><p>—————————</p>`);
        setTimeout(() => {
            if (multiChatRef.current[indexPersonMultiChat]) multiChatRef.current[indexPersonMultiChat].style = "background-color: transparent;";
            if (chatRef.current[indexPersonChat]) chatRef.current[indexPersonChat].style = "animation: none; top: 100px; left: 100px;";
        }, 500);
    } else {
        if (!isend) return false; // so manda a mensagem abaixo só para pessoa que esta clicando mais de uma vez.
        if (chatRefText.current[indexUserChat]) chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<p id='attention'>Você não pode pedir a atenção de alguém com tanta freqüência.</p>`);
    }
};
