var http = require('http')
bl = require('bl')
var fs = require('fs')

var server = http.createServer(function (req, res) {

	fs.createReadStream(process.argv[3])
	  .pipe(bl(function (err, data) {
	  	// console.log(data.toString())
		res.end(data.toString())
	  }))


})

server.listen(process.argv[2])
console.log("server listened")

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var fs = require('fs')

    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))

────────────────────────────────────────────────────────────────────────────────
*/
