var winston = require('winston')
var http = require("http");

console.log("server start")

// function onRequest(request, response) {
//   winston.log("info", "request received.")

//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }

// http.createServer(onRequest).listen(8888);

// console.log("server start..")





function start() {
	function onRequest(request, response) {
		console.log("Request received.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello.. world..");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.")
}


