const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const bodyparser = require("body-parser");

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const port = process.env.PORT || 80;

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

require("./socket/socketio")(io); //Iniciando o socket io

app.use("/routes", require("./routes")(io));

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});

module.exports = app;
