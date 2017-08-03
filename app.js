var SerialPort = require('serialport')
var port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 })
const express = require('express')
const serveStatic = require('serve-static')
const socketio = require('socket.io')

// Socket.io
var io = socketio.listen(9000)

io.on('connection', function (socket) {
  socket.on('evento', function (data) {
  port.write(data)
console.log(data)
  })
})

// Serve static files
var app = express()
app.use(serveStatic('./html'))
app.listen(8080)
