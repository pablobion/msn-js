import React, { useRef } from "react";

//sockets
import { socket } from "../configs/socket_export";
//sounds
import playsound from "./sounds/sounds";

let timeout = false; //Time out para o limite de chamar atenção
let timeoutwinks = false; //Time out para o limite de chamar atenção

const Scripts = () => {
    const sendMessage = ({ chatRefText, multiChatRef, chatRef, message, socketidUser, socketidPerson, chatopen, usernamesend }) => {
        if (!chatRefText.current) return false;
        if (!socketidUser) return alert("Houve um erro ao enviar sua mensaem.");

        if (!chatRefText.current) return false;
        const indexPersonChat = chatRefText.current.findIndex((elem) => {
            if (elem) {
                if (elem.id === socketidPerson) return socketidPerson;
            }
        });

        const indexUserChat = chatRefText.current.findIndex((elem) => {
            if (elem) {
                if (elem.id === socketidUser) return socketidUser;
            }
        }); //s

        if (chatRefText.current[indexPersonChat]) {
            //esse é o que aparece para quem manda
            chatRefText.current[indexPersonChat].insertAdjacentHTML("beforeend", `<p id="chat-usarname" style="color: darkgray; font-size: 14px;"  >${usernamesend} diz:</p><p id="chat-textmessage"style="margin-left: 10px; margin-bottom: 5px;">${message}</p>`);
            chatRefText.current[indexPersonChat].scrollTop = chatRefText.current[indexPersonChat].scrollHeight; //move o scroll para baixo
        }
        if (chatRefText.current[indexUserChat]) {
            // esse é o que aparece para quem recebe
            chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<p id="chat-usarname" style="color: black; font-size: 14px;">${usernamesend} diz:</p><p id="chat-textmessage" style="margin-left: 10px; margin-bottom: 5px;">${message}</p>`);
            chatRefText.current[indexUserChat].scrollTop = chatRefText.current[indexUserChat].scrollHeight; //move o scroll para baixo
        }

        if (chatopen === false) {
            //verificando se o chat estava aberto, se caso não, deixa ele laranja
            const indexPersonMultiChat = multiChatRef.current.findIndex((elem) => `${elem.id}` === `${socketidUser}-multichat`);

            const setOrange = setInterval(() => {
                if (chatRefText.current[indexPersonMultiChat]) multiChatRef.current[indexPersonMultiChat].style = "background-color: orange;";
            }, 1000);
            const setWhite = setInterval(() => {
                if (chatRefText.current[indexPersonMultiChat]) multiChatRef.current[indexPersonMultiChat].style = "background-color: white;";
            }, 2000);

            setTimeout(() => {
                clearInterval(setOrange);
                clearInterval(setWhite);
            }, 10000);
            playsound("type");
        }
    };

    const sendAudio = ({ audioURL, socketidPerson, socketidUser, chatRefText, chatRef, multiChatRef }) => {
        const indexPersonChat = chatRefText.current.findIndex((elem) => {
            if (elem && elem.id === socketidPerson) return socketidPerson;
        });

        const indexUserChat = chatRefText.current.findIndex((elem) => {
            if (elem && elem.id === socketidUser) return socketidUser;
        }); //s

        if (chatRefText.current[indexPersonChat]) {
            //esse é o que aparece para quem manda
            chatRefText.current[indexPersonChat].insertAdjacentHTML("beforeend", ` <audio src=${audioURL} controls style='margin-bottom: 5px'/>`);
        }
        if (chatRefText.current[indexUserChat]) {
            //esse é o que aparece para quem manda
            chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", ` <audio src=${audioURL} controls style='margin-bottom: 5px'/>`);
        }
    };

    const SendWink = ({ wink, socketidPerson, socketidUser, chatRefText, usernamesend }) => {
        const indexUserChat = chatRefText.current.findIndex((elem) => {
            if (elem && elem.id === socketidUser) return socketidUser;
        }); //s

        if (!timeoutwinks) {
            timeoutwinks = true;
            setTimeout(() => {
                timeoutwinks = false;
            }, 5000);

            if (chatRefText.current[indexUserChat]) {
                //esse é o que aparece para quem manda
                chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<p id="chat-usarname" style="color: black; font-size: 14px;">${usernamesend} envia um wink:</p>`);

                chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<img src=${require(`../pages/chat/components/chat/components/sendWinks/assets/${wink}.png`).default} onclick={document.getElementById('play-wink-${wink}-${socketidUser}').click()} style="margin-left: 15px; cursor: pointer; text-decoration: underline; width: 70px; "/>`);
                chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<p id="chat-usarname" onclick={document.getElementById('play-wink-${wink}-${socketidUser}').click()} style="color: #075af5; font-size: 18px; margin-left: 15px; cursor: pointer; text-decoration: underline">Reproduzir "${wink}"</p>`);
            }

            playsound("type");
            if (document.getElementById(`play-wink-${wink}-${socketidUser}`)) document.getElementById(`play-wink-${wink}-${socketidUser}`).click();
        } else {
            if (localStorage.getItem("msn-language") === "br") {
                if (chatRefText.current[indexUserChat]) chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<p id='attention'>Você não pode enviar winks com tanta freqüência.</p>`);
            } else {
                if (chatRefText.current[indexUserChat]) chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<p id='attention'>You cannot send winks as often.</p>`);
            }
        }
    };

    const drawAttention = ({ chatRefText, chatRef, multiChatRef, id, whosend, isend, statusperson }) => {
        const indexPersonMultiChat = multiChatRef.current.findIndex((elem) => `${elem.id}` === `${id}-multichat`);
        const indexPersonChat = chatRefText.current.findIndex((elem) => elem.id === id);
        const indexUserChat = chatRefText.current.findIndex((elem) => elem.id === id);

        if (!timeout) {
            timeout = true;
            setTimeout(() => {
                timeout = false;
            }, 5000);

            const styles = getComputedStyle(chatRef.current[indexPersonChat]); //pegando os styles do chat

            if (statusperson === "online") {
                //so faz animação se a pessa estiver online.
                playsound("nudge");
                if (isend) socket.emit("change visible chat draw attention", { socketiduser: socket.id, socketidperson: id }); // faz um emit para mostrar o chat pra pessoa caso ela esteja com status online
                if (multiChatRef.current[indexPersonMultiChat]) multiChatRef.current[indexPersonMultiChat].style = "background-color: tomato;animation: shake 0.5s;";
                if (chatRef.current[indexPersonChat]) chatRef.current[indexPersonChat].style = `animation: shake 0.5s; width: ${styles.width}; height: ${styles.height};`;
            }
            if (localStorage.getItem("msn-language") === "br") {
                if (chatRefText.current[indexUserChat]) chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<p>—————————</p><p id="chat-usarname">${whosend} acabou de chamar a atenção!</p><p>—————————</p>`);
            } else {
                if (chatRefText.current[indexUserChat]) chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<p>—————————</p><p id="chat-usarname">${whosend} have just sent a Nudge!</p><p>—————————</p>`);
            }

            setTimeout(() => {
                const marginLeft = +styles["margin-left"].match(/[+-]?([0-9]*[.])?[0-9]+/gi);
                if (multiChatRef.current[indexPersonMultiChat]) multiChatRef.current[indexPersonMultiChat].style = "background-color: white;";
                if (chatRef.current[indexPersonChat]) chatRef.current[indexPersonChat].style = `animation: none; width: ${styles.width}; height: ${styles.height}; margin-top: ${Math.random() * (100 - 60) + 60}px; margin-left: ${Math.random() * (marginLeft + 50 - marginLeft) + marginLeft}px;`;
            }, 500);

            const inputDOMNode = chatRef.current[indexPersonChat];
            inputDOMNode.parentNode.appendChild(inputDOMNode); // faz puxar para frente ao chamar atenção
        } else {
            if (!isend) return false; // so manda a mensagem abaixo só para pessoa que esta clicando mais de uma vez.
            if (localStorage.getItem("msn-language") === "br") {
                if (chatRefText.current[indexUserChat]) chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<p id='attention'>Você não pode pedir a atenção de alguém com tanta freqüência.</p>`);
            } else {
                if (chatRefText.current[indexUserChat]) chatRefText.current[indexUserChat].insertAdjacentHTML("beforeend", `<p id='attention'>You can't get someone's attention often.</p>`);
            }
        }
    };

    return [drawAttention, sendMessage, sendAudio, SendWink];
};

export default Scripts;
