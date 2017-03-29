var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('Server running..');

// route function
app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
 }); 

// open connection with socket.io
io.sockets.on('connection', function(socket){
	connections.push(socket);
	console.log('conmected: %s sockets connected', connections.length);

	// Disconnected
	socket.on('Disconnect', function (data) {
		connections.splice(connections.indexOf(socket), 1);
		console.log('Disconnected: %s sockets connected', connections.length);
	});
	
	socket.on('send message', function (data){
		io.sockets.emit('new message', {msg: data});
	});
});