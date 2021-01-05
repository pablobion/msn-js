let socketsConnected = [];

const addUser = (socket) => {
    socketsConnected.push({
        socketid: socket.id,
        username: socket.id,
        status: "busy",
        subnick: "alguma coisa aquiu",
        chats: [],
    });
};

const removeUser = (socket) => {
    const index = socketsConnected.findIndex((elem) => elem.socketid === socket.id);

    if (index !== -1) {
        socketsConnected.splice(index, 1);
    }
};

const assignChat = (socketid, socketidperson, to) => {
    let indexuser = socketsConnected.findIndex((elem) => elem.socketid === socketid);

    if (socketsConnected[indexuser]) {
        if (!socketsConnected[indexuser].chats.find((elem) => elem.socketidperson === socketidperson)) {
            //verifica se a pessoa já nao esta com o chat da outra aberto, para não criar 2 repetidos.
            //o 'to' verifica se é o user que ta abrindo ou está sendo atribuindo um chat para uma person
            to === "user"
                ? (socketsConnected[indexuser].chats = [...socketsConnected[indexuser].chats, { socketidperson: socketidperson, visible: true, newMessages: false }])
                : (socketsConnected[indexuser].chats = [...socketsConnected[indexuser].chats, { socketidperson: socketidperson, visible: false, newMessages: false }]); //adicionando a pessoa no seu array de chat
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

const sendMessage = (socket, message, socketidUser, socketidPerson) => {
    const indexperson = socketsConnected.findIndex((elem) => elem.socketid === socketidPerson);

    if (socketsConnected[indexperson]) {
        const updateChatsPerson = assignChat(socketidPerson, socketidUser, "person");
        return updateChatsPerson;
    }
};

const drawAttenAttention = (socket, socketidPerson) => {
    const indexperson = socketsConnected.findIndex((elem) => elem.socketid === socketidPerson);

    if (socketsConnected[indexperson]) {
        const updateChatsPerson = openChat(socketidPerson, socketidUser);

        return updateChatsPerson;
    }
};

module.exports = {
    addUser,
    changeVisible,
    socketsConnected,
    removeUser,
    closeChat,
    sendMessage,
    assignChat,
};
