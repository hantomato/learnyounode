var http = require('http')
var url = require('url')
var winston = require('winston')

function parseTime (time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unixTime (time) {
	return {
		unixtime: time.getTime()
	}
}


var server = http.createServer(function (req, res) {

  var parseUrl = url.parse(req.url, true);
  winston.log('info', "")
  winston.log('info', parseUrl)
  winston.log('info', "")
  console.log("req url " + req.url);
  console.log("req search " + parseUrl.search);
  // console.log("request pathname " + parseUrl.pathname);
  // console.log("request pathname " + parseUrl.path);
  // console.log("request pathname " + parseUrl.query['iso']);


  var result;

  // JSON.stringify(json, )

  res.writeHead(200, { 'Content-Type': 'application/json' })

  if (parseUrl.pathname == "/api/parsetime") {
    var iso = parseUrl.query['iso'];
    var date = new Date(iso);
    result = JSON.stringify(parseTime(date));

  } else if (parseUrl.pathname == "/api/unixtime") {
    var iso = parseUrl.query['iso'];
    var date = new Date(iso);
    result = JSON.stringify(unixTime(date)); 
  }

  if (result) {
  	res.writeHead(200, { 'Content-Type': 'application/json' })
  	res.end(result)
  } else {
	res.writeHead(404)
	res.end()
  }


})

server.listen(process.argv[2])