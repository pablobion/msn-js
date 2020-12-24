const app = require("express")();
const server = require("http").createServer(app);
const bodyparser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const port = process.env.PORT || 80;

const io = require("socket.io")(server);

let socketConnected = [];

app.get("/", (req, res) => {
    res.send("Olá mundo");
});

app.post("/teste", (req, res) => {
    res.send("Olá mundo teste post ok");
});

io.on("connection", (socket) => {
    console.log("a user connected");
    socketConnected.push(socket.id);
    console.log(socketConnected);

    socket.on("chat message", (msg) => {
        console.log("message: " + msg);
        console.log(socket.id);
    });

    socket.on("disconnect", () => {
        const index = socketConnected.indexOf(socket.id);
        if (index !== -1) {
            socketConnected.splice(index, 1);
        }
        console.log("user disconnected");
        console.log(socketConnected);
    });
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
