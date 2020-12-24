// ws.js
import io from "socket.io-client";
//configs
import { config } from "./config_connections";
const configs = config();

const socket = io(`http://${configs.ipServer}:${configs.portServer}`);
socket.on("connect", () => console.log(`[IO] Connect => A new connection has been established ${socket.id}`));

export { socket };
