const app = require("express")();
const cors = require("cors");
const server = require("http").createServer(app);

const bodyparser = require("body-parser");

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const port = process.env.PORT || 80;

const io = require("socket.io")(server);

let socketsConnected = [];

app.get("/", (req, res) => {
    res.send("Olá mundo ");
});

app.post("/teste", (req, res) => {
    res.send("Olá mundo teste post ok");
});

app.get("/statusall", (req, res) => {
    return res.json({
        socketsConnected,
    });
});

io.on("connection", (socket) => {
    console.log("a user connected: " + socket.id);

    socketsConnected.push({ socketid: socket.id, username: socket.id, status: "busy", subnick: "alguma coisa aquiu", chats: [] });
    io.emit("socketsConnected", socketsConnected); // sending to the client

    socket.on("send message chat client", ({ message, socketidUser, socketidPerson }) => {
        if (!message) message = ""; //Caso a mensagem venha como null ou quando a pessoa nao escreve nada;
        console.log(`${message} - ${socketidUser}`);

        io.to(socketidUser).emit("send message chat server", { message, socketidUser, socketidPerson }); //mandando para o usuario que mandou a msg
        // io.to(socketidPerson).emit("send message chat server", message); // mandando para a pessoa que recebeu a mensagem
    });

    const changeVisible = (data) => {
        const indexuser = socketsConnected.findIndex((elem) => elem.socketid === socket.id);
        const indexchat = socketsConnected[indexuser].chats.findIndex((elem) => elem.socketidperson === data);

        if (socketsConnected[indexuser].chats[indexchat] && socketsConnected[indexuser].chats[indexchat].visible === true) {
            socketsConnected[indexuser].chats[indexchat].visible = false;
        } else {
            socketsConnected[indexuser].chats[indexchat].visible = true;
        }

        io.to(socket.id).emit("refresh multi chats", socketsConnected[indexuser].chats);
    };

    socket.on("change visible chat", (data) => {
        changeVisible(data);
    });

    socket.on("click on chat", (data) => {
        let indexuser = socketsConnected.findIndex((elem) => elem.socketid === socket.id);

        if (socketsConnected[indexuser].chats) {
            //Verificando se a pessoa ja possui algum chat igual a este com mesmo id
            if (!socketsConnected[indexuser].chats.find((elem) => elem.socketidperson === data)) {
                // verificando se quem ela clicou já está na lista de chats abertos
                socketsConnected[indexuser].chats = [...socketsConnected[indexuser].chats, { socketidperson: data, visible: true }]; //adicionando a pessoa no seu array de chat
            } else {
                //Verifica se a pessoa clicou em um chat já aberto, se estiver aberto e não estiver mostrando ele puxa pra frente da tela, se já estiver na tela, nao faz nada.
                const indexuser = socketsConnected.findIndex((elem) => elem.socketid === socket.id);
                const indexchat = socketsConnected[indexuser].chats.findIndex((elem) => elem.socketidperson === data);
                if (socketsConnected[indexuser].chats[indexchat] && socketsConnected[indexuser].chats[indexchat].visible === false) {
                    changeVisible(data);
                }
            }
        }
        // socketsConnected[indexuser].chats = Array.from(new Set(socketsConnected[indexuser].chats)); //verificando e removendo caso ja exista o id na lista    NÃO REMOVER

        io.to(socket.id).emit("refresh multi chats", socketsConnected[indexuser].chats);
    });

    socket.on("close chat", (data) => {
        const indexuser = socketsConnected.findIndex((elem) => elem.socketid === socket.id);
        const indexchat = socketsConnected[indexuser].chats.findIndex((elem) => elem.socketidperson === data);
        socketsConnected[indexuser].chats.splice(indexchat, 1);

        io.to(socket.id).emit("refresh multi chats", socketsConnected[indexuser].chats);
    });

    socket.on("disconnect", () => {
        socketsConnected.forEach((elem, index) => {
            if (elem.socketid === socket.id) {
                if (index !== -1) {
                    socketsConnected.splice(index, 1);
                    io.emit("socketsConnected", socketsConnected);
                }
            }
        });
    });
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
