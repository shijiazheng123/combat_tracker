const express = require('express');
const app = express();
const server = require('http').createServer(app);
// const path = require('path');
const socket = require('socket.io');
const ws = socket(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});
const port = 8080;


app.get('/', (req,res) =>{
    res.send("abc");
    console.log("abc");
});

server.listen(port, () => {
    console.log(`listening on ${port}`);
});

ws.on('connection', (socket) => {
    console.log('new client');
    socket.emit('connection', null);
});