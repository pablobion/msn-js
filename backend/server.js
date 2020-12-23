const app = require("express")();
const http = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(http);

app.use(cors());

app.post("/", (req, res) => {
    console.log("oiiiii");
});

io.on("connection", (socket) => {
    console.log("a user connected");
});

http.listen(3333, () => {
    console.log("listening on *:3333");
});
