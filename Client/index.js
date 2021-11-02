'use strict';

const client = require('socket.io-client');

//client to server connection

function connect(namespace) {
    return client('http://localhose:3030?${namespace}');
}

const messageClient = client('http://localhost:3030/messages');

const socket = client('http://localhost:3030');

socket.emit('message', 'I got the message');
socket.on('received', console.log)