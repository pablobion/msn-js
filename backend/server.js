const app = require("express")();
const cors = require("cors");
app.use(cors());
const server = require("http").createServer(app);

const bodyparser = require("body-parser");

const { addUser, socketsConnected, removeUser, closeChat, changeVisibleChat, sendMessage, assignChat, drawAttenAttention, changeStatus, changeSubnick, changeAvatar, changeVisibleChatAttention, changeUsername, getPerson, socketsConnectedCounter } = require("./models");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const port = process.env.PORT || 80;

const io = require("socket.io")(server, {
    cors: {
        origin: "https://msn-js.vercel.app",
        //origin: "https://msn-js.vercel.app",
        //origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

app.get("/statusall", (req, res) => {
    return res.json({
        socketsConnected,
    });
});

io.on("connection", (socket) => {
    console.log("a user connected: " + socket.id);

    addUser(socket.id); //Adicionando o usuario que entrou na lista de sockets online
    io.emit("socketsConnected", socketsConnected); // Mandando para os clientes que o socket entrou e atualizando as listas de sockets

    socket.on("socket connected notification", ({ avatar }) => {
        io.emit("socket connected notification", { username: getPerson(socket.id).username, avatar }); // mandando o cliente que entoru para notificação...
        io.emit("socketsConnectedCounter", socketsConnectedCounter()); // Quantidade de pessoas online...
    });

    socket.on("change avatar", (avatarlink) => {
        changeAvatar(socket.id, avatarlink);
        io.emit("socketsConnected", socketsConnected); // Mandando para os clientes que o socket entrou
    });

    socket.on("send server message text", ({ message, socketidUser, socketidPerson }) => {
        const { updateChatsPerson, chatopen } = sendMessage(socketidUser, socketidPerson);

        if (updateChatsPerson) io.to(socketidPerson).emit("refresh multi chats", updateChatsPerson); // retornando a lista de chats do usuario que clicou

        io.to(socketidUser).emit("send client message text", { message, socketidUser, socketidPerson, usernamesend: getPerson(socket.id).username }); //mandando para o usuario que mandou a msg
        io.to(socketidPerson).emit("send client message text", { message, socketidUser, socketidPerson, chatopen, usernamesend: getPerson(socket.id).username }); //mandando para o usuario que recebeu a msg
    });

    socket.on("Draw AttenAttention", (socketidperson) => {
        const { updateChatsPerson, whosend, statusperson } = drawAttenAttention(socket.id, socketidperson);
        io.to(socketidperson).emit("refresh multi chats", updateChatsPerson);

        io.to(socketidperson).emit("Draw AttenAttention", { id: socket.id, whosend, isend: false, statusperson });
        io.to(socket.id).emit("Draw AttenAttention", { id: socketidperson, whosend, isend: true, statusperson });
    });

    socket.on("change visible chat draw attention", ({ socketiduser, socketidperson }) => {
        const personChats = changeVisibleChatAttention({ socketiduser, socketidperson }); // troca o visible de true para false e ao contrario também, e pega os chats novamente
        io.to(socketidperson).emit("refresh multi chats", personChats); //manda os chats com o atributo do visible atualizado
    });

    socket.on("change visible chat", (socketidperson) => {
        const userChats = changeVisibleChat(socket.id, socketidperson); // troca o visible de true para false e ao contrario também, e pega os chats novamente
        io.to(socket.id).emit("refresh multi chats", userChats); //manda os chats com o atributo do visible atualizado
    });

    socket.on("click on chat", (socketidperson) => {
        const userChats = assignChat(socket.id, socketidperson, "user"); // mandando o socket id person para a lista do socket user
        io.to(socket.id).emit("refresh multi chats", userChats); // retornando a lista de chats do usuario que clicou
    });

    socket.on("close chat", (socketidperson) => {
        const userChats = closeChat(socket.id, socketidperson); //retornando chats do user
        io.to(socket.id).emit("refresh multi chats", userChats); //envia para o client a nova lista
    });

    socket.on("change status user", (status) => {
        changeStatus(socket.id, status);
        io.emit("socketsConnected", socketsConnected); // Mandando para os clientes que o socket entrou
        io.emit("socketsConnectedCounter", socketsConnectedCounter()); // Quantidade de pessoas online...
    });

    socket.on("change subnick user", (subnick) => {
        let subnickreturn = changeSubnick(socket.id, subnick);
        io.emit("socketsConnected", socketsConnected); // Mandando para os clientes que o socket entrou
        io.to(socket.id).emit("return subnick user", subnickreturn); //envia para o client a nova lista
    });

    socket.on("change username user", (username) => {
        let usernamereturn = changeUsername(socket.id, username);
        io.emit("socketsConnected", socketsConnected); // Mandando para os clientes que o socket entrou
        io.to(socket.id).emit("return username user", usernamereturn); //envia para o client a nova lista
    });

    socket.on("disconnect", () => {
        removeUser(socket.id); //remove o socket da lista
        io.emit("socketsConnected", socketsConnected); //envia para o client a nova lista
        io.emit("socketsConnectedCounter", socketsConnectedCounter()); // Quantidade de pessoas online...
    });
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
