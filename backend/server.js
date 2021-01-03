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

        if (socketsConnected[indexuser].chats) {
            //Verificando se a pessoa ja possui algum chat
            if (!socketsConnected[indexuser].chats.find((elem) => elem.socketidperson === data)) {
                // verificando se quem ela clicou já está na lista de chats abertos
                socketsConnected[indexuser].chats = [...socketsConnected[indexuser].chats, { socketidperson: data, visible: true }]; //adicionando a pessoa no seu array de chat
            }
        }
        socketsConnected[indexuser].chats = Array.from(new Set(socketsConnected[indexuser].chats)); //verificando e removendo caso ja exista o id na lista

        io.to(socket.id).emit("refresh multi chats", socketsConnected[indexuser].chats);
    });

    socket.on("close chat", (data) => {
        let indexuser = socketsConnected.findIndex((elem) => elem.socketid === socket.id);
        socketsConnected[indexuser].chats.forEach((elem, index) => {
            if (elem === data) {
                if (index !== -1) {
                    console.log("tentando retirar chat");
                }
            }
        });
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
