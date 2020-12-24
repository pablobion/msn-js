const app = require("express")();
const server = require("http").createServer(app);
const bodyparser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const port = process.env.PORT || 3333;

const io = require("socket.io")(server);

app.get("/", (req, res) => {
    res.send("Olá mundo");
});

app.post("/teste", (req, res) => {
    res.send("Olá mundo teste post ok");
});

// io.on("connection", (socket) => {
//     console.log("a user connected");

//     socket.on("chat message", (msg) => {
//         console.log("message: " + msg);
//         console.log(socket.id);
//     });

//     socket.on("disconnect", () => {
//         console.log("user disconnected");
//     });
// });

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
