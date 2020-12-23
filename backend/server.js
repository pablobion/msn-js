const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 3333;

const io = require("socket.io")(server);

app.post("/", (req, res) => {
    console.log("oiiiii");
    res.send({ mobile: "kkk" });
});

io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("chat message", (msg) => {
        console.log("message: " + msg);
        console.log(socket.id);
    });

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
