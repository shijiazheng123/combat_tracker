import socketIOClient from "socket.io-client";


export const server = "localhost:8080";
export const socket = socketIOClient(server);
