var http = require("http");
var url = require("url");
var winston = require("winston")

function start(route, handle) {
	function onRequest(request, response) {
		console.log("Request received.");

		var pathname = url.parse(request.url).pathname;
		route(handle, pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello.. world..");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.")
}

exports.start = start;
