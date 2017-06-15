const express = require('express')
const serveStatic = require('serve-static')
const socketio = require('socket.io')

// Socket.io
var io = socketio.listen(9000)

io.on('connection', function (socket) {
  socket.on('evento', function (data) {
    socket.broadcast.emit('evento', data)
  })
})

// Serve static files
var app = express()
app.use(serveStatic('./html'))
app.listen(8080)
