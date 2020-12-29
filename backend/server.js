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

    socketsConnected.push({ socketid: socket.id, username: socket.id, status: "busy", subnick: "sla", chats: [] });

    io.emit("socketsConnected", socketsConnected); // sending to the client

    socket.on("chat message", (msg) => {
        console.log("message: " + msg);
    });

    socket.on("click on chat", (data) => {
        let indexperson = socketsConnected.findIndex((elem) => elem.socketid === data);
        let indexuser = socketsConnected.findIndex((elem) => elem.socketid === socket.id);

        if (socketsConnected[indexperson].chats) socketsConnected[indexperson].chats = [...socketsConnected[indexperson].chats, socket.id]; //adicionando o socket id da pessoa no array de chats da outra pessoa que foi clicada
        if (socketsConnected[indexuser].chats) socketsConnected[indexuser].chats = [...socketsConnected[indexuser].chats, data]; //adicionando a pessoa no seu array de chat

        socketsConnected[indexperson].chats = Array.from(new Set(socketsConnected[indexperson].chats)); //verificando e removendo caso ja exista o id na lista
        socketsConnected[indexuser].chats = Array.from(new Set(socketsConnected[indexuser].chats)); //verificando e removendo caso ja exista o id na lista

        io.emit("refresh multi chats", socketsConnected[indexuser].chats);

        // console.log(socketsConnected[indexperson].chats);
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
