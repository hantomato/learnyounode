var server = require("./server")
var router = require("./router")
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

var winston = require("winston")
winston.log("info", "typeof")
winston.log("info", typeof handle["/upload"])
winston.log("info", typeof handle["/333"])
var sss = "ff"
winston.log("info", typeof sss)

server.start(router.route, handle);
