const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const bodyparser = require("body-parser");

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const port = process.env.PORT || 80;

// const ipconfig = "http://localhost:3000";

//  "https://msn-js.vercel.app",
//  "http://localhost:3000",

const io = require("socket.io")(server, {
    cors: {
        // origin: ipconfig,
        origin: "*",
        methods: ["GET", "POST"],
    },
});

const socketio = require("./socket/socketio")(io);
const routes = require("./routes");
app.use("/routes", routes);

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});

module.exports = app;
