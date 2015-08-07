
http = require('http')

var targetUrl = process.argv[2]

http.get(targetUrl, function(response) {
	// console.log(response)
	response.setEncoding("utf8")
	response.on("data", function (data) {
		// var encodedData = 
		console.log(data)
	})
});


// following is the official solution
/*
────────────────────────────────────────────────────────────────────────────────
    var http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })

────────────────────────────────────────────────────────────────────────────────
*/