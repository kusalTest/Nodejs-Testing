// lets require/import the HTTP module
var http = require('http');

// define a port we want to listen to
const PORT = 8080;

// need a function which handles requests and send response
function handleRequst(request, response){
	response.end('It works!! path Hit: ' + request.url);
}

// create a server
var server = http.createServer(handleRequst);

// start server
server.listen(PORT, function () {
	// Callback triggered when server is successfully listening..
	console.log("Server listening on: http://localhost:%s", PORT);
});