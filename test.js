const io = require('socket.io-client')

socket = io('http://localhost:9000')


socket.emit('evento', 5)
