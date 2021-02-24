let socketsConnected = [];

const getIndex = (socketid) => {
    return socketsConnected.findIndex((elem) => elem.socketid === socketid);
};

const getIndexChat = (index, socketidperson) => {
    if (socketsConnected[index]) {
        return socketsConnected[index].chats.findIndex((elem) => elem.socketidperson === socketidperson);
    }
};

const addUser = (socketid) => {
    socketsConnected.push({
        socketid: socketid,
        username: socketid,
        status: "invisible",
        subnick: "",
        chats: [],
        avatar: "",
        music: {
            name: "",
            author: "",
            url: "",
        },
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
    if (socketsConnected[indexuser]) {
        socketsConnected[indexuser].subnick = `${subnick}`;
        socketsConnected[indexuser].music.name = "";
        socketsConnected[indexuser].music.author = "";
        socketsConnected[indexuser].music.url = "";
    }

    return socketsConnected[indexuser].subnick;
};

const changeUsername = (socketid, username) => {
    const indexuser = getIndex(socketid);
    if (socketsConnected[indexuser]) {
        socketsConnected[indexuser].username = `${username}`;
    }

    return socketsConnected[indexuser].username;
};

const changeAvatar = (socketid, avatarlink) => {
    const indexuser = getIndex(socketid);

    socketsConnected[indexuser].avatar = `${avatarlink}`;
};

const drawAttenAttention = (socketid, socketidperson) => {
    const updateChatsPerson = assignChat(socketidperson, socketid, "person"); //Atribui o chat para o person, lá na function verifica se já tem ou nao.

    const indexperson = getIndex(socketidperson);
    const indexchat = getIndexChat(indexperson, socketid);

    const indexuser = getIndex(socketid); // pega o index de quem ta chamando atenção

    let statusperson;

    let whosend = "";
    if (socketsConnected[indexuser]) {
        //verifica se a pessoa realmente ta on
        whosend = socketsConnected[indexuser].username;
    }

    if (socketsConnected[indexperson]) {
        statusperson = socketsConnected[indexperson].status;
    }

    return { updateChatsPerson, whosend, statusperson };
};

const changeVisibleChatAttention = ({ socketiduser, socketidperson }) => {
    const indexperson = getIndex(socketidperson); // pega index da pessoa que vai receber o change visible chat

    if (socketsConnected[indexperson]) {
        const indexchat = getIndexChat(indexperson, socketiduser);
        if (socketsConnected[indexperson].chats[indexchat]) {
            if (socketsConnected[indexperson].status === "online") {
                socketsConnected[indexperson].chats[indexchat].visible = true;
            }

            return socketsConnected[indexperson].chats;
        }
    }
};

const getPerson = (socketid) => {
    if (socketsConnected) {
        let person = socketsConnected.find((elem) => elem.socketid === socketid);
        return person;
    }
};

const socketsConnectedCounter = () => {
    let counter = 0;
    socketsConnected.forEach((elem) => {
        if (elem.status != "invisible") counter += 1;
    });
    return counter;
};

const socketAddMusic = ({ socketid, name, author, url }) => {
    const indexperson = getIndex(socketid); // pega index da pessoa que vai receber o change visible chat
    if (socketsConnected[indexperson]) {
        socketsConnected[indexperson].music.name = name;
        socketsConnected[indexperson].music.author = author;
        socketsConnected[indexperson].music.url = url;
    }
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
    changeVisibleChatAttention,
    changeUsername,
    getPerson,
    socketsConnectedCounter,
    socketAddMusic,
};
