let socketsConnected = [];

const getIndex = (socketid) => {
    return socketsConnected.findIndex((elem) => elem.socketid === socketid);
};

const getIndexChat = (index, socketidperson) => {
    return socketsConnected[index].chats.findIndex((elem) => elem.socketidperson === socketidperson);
};

const addUser = (socketid) => {
    socketsConnected.push({
        socketid: socketid,
        username: socketid,
        status: "online",
        subnick: "",
        chats: [],
        avatar: "",
    });
};

const removeUser = (socketid) => {
    const index = getIndex(socketid);

    if (index !== -1) {
        socketsConnected.splice(index, 1);
    }
};

const assignChat = (socketid, socketidperson, to) => {
    let indexuser = getIndex(socketid);

    if (socketsConnected[indexuser]) {
        if (!socketsConnected[indexuser].chats.find((elem) => elem.socketidperson === socketidperson)) {
            //verifica se a pessoa já nao esta com o chat da outra aberto, para não criar 2 repetidos.
            //o 'to' verifica se é o user que ta abrindo ou está sendo atribuindo um chat para uma person
            to === "user" ? (socketsConnected[indexuser].chats = [...socketsConnected[indexuser].chats, { socketidperson: socketidperson, visible: true }]) : (socketsConnected[indexuser].chats = [...socketsConnected[indexuser].chats, { socketidperson: socketidperson, visible: false }]); //adicionando a pessoa no seu array de chat
        }

        return socketsConnected[indexuser].chats;
    }
};

const closeChat = (socketid, socketidperson) => {
    const indexuser = getIndex(socketid);
    const indexchat = getIndexChat(indexuser, socketidperson);
    socketsConnected[indexuser].chats.splice(indexchat, 1);

    return socketsConnected[indexuser].chats;
};

const changeVisibleChat = (socketid, socketidperson) => {
    const indexuser = getIndex(socketid);

    if (socketsConnected[indexuser]) {
        const indexchat = getIndexChat(indexuser, socketidperson);
        if (socketsConnected[indexuser].chats[indexchat]) {
            if (socketsConnected[indexuser].chats[indexchat].visible === true) {
                //verifica se o chat está aberto.
                socketsConnected[indexuser].chats[indexchat].visible = false;
            } else {
                socketsConnected[indexuser].chats[indexchat].visible = true;
            }

            return socketsConnected[indexuser].chats;
        }
    }
};

const sendMessage = (socketid, socketidperson) => {
    const updateChatsPerson = assignChat(socketidperson, socketid, "person"); //Atribui o chat para o person, lá na function verifica se já tem ou nao.

    let chatopen;

    const indexuser = getIndex(socketid); //pega index do user que no caso é quem ta mandando a mensagem
    const indexperson = getIndex(socketidperson); //index de quem ta recebendo a mensagem

    const indexchatuser = getIndexChat(indexuser, socketidperson); //index do chat onde quem vai receber a mensagem está

    if (socketsConnected[indexperson] && socketsConnected[indexperson].chats[indexchatuser]) {
        // verifica se o chat de quem recebeu estava aberto
        if (socketsConnected[indexperson].chats[indexchatuser].visible === false) {
            chatopen = false;
        } else {
            chatopen = true;
        }
    } else {
        chatopen = false;
    }

    return { updateChatsPerson, chatopen };
};

const changeStatus = (socketid, status) => {
    const indexuser = getIndex(socketid);

    switch (status) {
        case "online":
            socketsConnected[indexuser].status = "online";
            break;
        case "busy":
            socketsConnected[indexuser].status = "busy";
            break;
        case "away":
            socketsConnected[indexuser].status = "away";
            break;
        case "invisible":
            socketsConnected[indexuser].status = "invisible";
            break;
        default:
    }
};

const changeSubnick = (socketid, subnick) => {
    const indexuser = getIndex(socketid);

    socketsConnected[indexuser].subnick = `${subnick}`;
    return socketsConnected[indexuser].subnick;
};

const changeAvatar = (socketid, avatarlink) => {
    const indexuser = getIndex(socketid);

    socketsConnected[indexuser].avatar = `${avatarlink}`;
};

const drawAttenAttention = (socketid, socketidperson) => {
    changeVisibleChat(socketidperson, socketid);
    console.log("chamaram atenção");
};

module.exports = {
    addUser,
    changeVisibleChat,
    socketsConnected,
    removeUser,
    closeChat,
    sendMessage,
    assignChat,
    drawAttenAttention,
    changeStatus,
    changeSubnick,
    changeAvatar,
};
