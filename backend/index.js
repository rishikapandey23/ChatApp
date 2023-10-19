const express = require('express');
const http = require('http'); // Node's built-in http module
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app); // Create an HTTP server

const io = socketIo(server); // Initialize Socket.IO

const usersIdWithName = {};

// ... (other Express middleware and routes)

io.on('connection', (socket) => {
    console.log('New connection')

    socket.on('username', ({userName, id}) => {
        console.log(userName + " is connected");
        usersIdWithName[id] = userName;
    })

    socket.on('message', (message, id) => {
        console.log(message + " " + id + " " + usersIdWithName[id]);
    })

})

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
