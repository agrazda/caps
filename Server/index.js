'use strict';

const socketio = require('socket.io');

const PORT = process.env.PORT || 3030;

const server = socketio(PORT);

const messages = server.of('/messages');



server.on('connection', (socket) => {
    //always make a connection 
    console.log('socket is connected', socket.id);

    socket.on('message', (payload) => {
        console.log(payload);

        server.emit('recieved', {
            id: socket.id,
            payload
        });
    });
});

messages.on('connection', (socket) => {
    console.log('${socket.id} connected to server' );

    socket.on('join', (payload) => {
        socket.join(payload.roomname);
      });
    
      socket.on('message', (payload) => {
        messages.to(payload.room).emit(payload.message);
      });
});