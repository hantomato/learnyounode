var http = require('http')
bl = require('bl')
var fs = require('fs')

var server = http.createServer(function (req, res) {

	// fs.createReadStream(process.argv[3])
	//   .pipe(bl(function (err, data) {
	//   	// console.log(data.toString())
	// 	res.end(data.toString())
	//   }))

  if (req["method"] != "POST") 
    return res.end("Server responds to POST requests only")

  res.writeHead(200, {'content-type': 'text/plain'})

  var result = "";
  req.on('data', function(data) {
    // console.log("data::::" + data.toString())
    result += data.toString().toUpperCase();

  })

  .on('end', function() {
    res.end(result)  
  })

})

server.listen(process.argv[2])

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))

────────────────────────────────────────────────────────────────────────────────
*/