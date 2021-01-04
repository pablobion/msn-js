let socketsConnected = [];

const addUser = (socket) => {
    socketsConnected.push({ socketid: socket.id, username: socket.id, status: "busy", subnick: "alguma coisa aquiu", chats: [] });
};

const removeUser = (socket) => {
    const index = socketsConnected.findIndex((elem) => elem.socketid === socket.id);

    if (index !== -1) {
        socketsConnected.splice(index, 1);
    }
};

const openChat = (socketid, socketidperson) => {
    let indexuser = socketsConnected.findIndex((elem) => elem.socketid === socketid);

    if (socketsConnected[indexuser]) {
        //Verificando se a pessoa ja possui algum chat igual a este com mesmo id
        if (!socketsConnected[indexuser].chats.find((elem) => elem.socketidperson === socketidperson)) {
            // verificando se quem ela clicou já está na lista de chats abertos
            socketsConnected[indexuser].chats = [...socketsConnected[indexuser].chats, { socketidperson: socketidperson, visible: true }]; //adicionando a pessoa no seu array de chat
        } else {
            //Verifica se a pessoa clicou em um chat já aberto, se estiver aberto e não estiver mostrando ele puxa pra frente da tela, se já estiver na tela, nao faz nada.
            const indexuser = socketsConnected.findIndex((elem) => elem.socketid === socketid);
            const indexchat = socketsConnected[indexuser].chats.findIndex((elem) => elem.socketidperson === socketidperson);
            if (socketsConnected[indexuser].chats[indexchat] && socketsConnected[indexuser].chats[indexchat].visible === false) {
                changeVisible(socketid, socketidperson); //chama a função passando o socketid e
            }
        }
    }
    return socketsConnected[indexuser].chats;
};

const closeChat = (socket, data) => {
    const indexuser = socketsConnected.findIndex((elem) => elem.socketid === socket.id);
    const indexchat = socketsConnected[indexuser].chats.findIndex((elem) => elem.socketidperson === data);
    socketsConnected[indexuser].chats.splice(indexchat, 1);

    return socketsConnected[indexuser].chats;
};

const changeVisible = (socketid, socketidperson) => {
    const indexuser = socketsConnected.findIndex((elem) => elem.socketid === socketid);

    if (socketsConnected[indexuser]) {
        const indexchat = socketsConnected[indexuser].chats.findIndex((elem) => elem.socketidperson === socketidperson);
        if (socketsConnected[indexuser].chats[indexchat].visible === true) {
            socketsConnected[indexuser].chats[indexchat].visible = false;
        } else {
            socketsConnected[indexuser].chats[indexchat].visible = true;
        }
        return socketsConnected[indexuser].chats;
    }
};

const messageToServer = (socket, message, socketidUser, socketidPerson) => {
    const indexperson = socketsConnected.findIndex((elem) => elem.socketid === socketidPerson);

    if (socketsConnected[indexperson]) {
        if (socketsConnected[indexperson].chats.find((elem) => elem.socketidperson === socketidUser)) {
            //verifica se a outra pessoa (person) também tem o chat aberto do user
            console.log("achamos");
        } else {
            //Person não tem o chat aberto.
            console.log("n tem");
            const updateChatsPerson = openChat(socketidPerson, socketidUser);

            return updateChatsPerson;
        }
    }
};

module.exports = { addUser, changeVisible, socketsConnected, removeUser, openChat, closeChat, messageToServer };
