// 첫번째 파라미터로 url이 주어지는데, 이 url에 HTTP GET request를 하는 프로그램을 작성하라.
// 모든 데이타를 수집해서 2가지를 출력해야하는데..
// first line : an integer representing the number of characters received from the server.
// second line : string of characters sent by the server

http = require('http')
var bl = require('bl')

var targetUrl = process.argv[2]

http.get(targetUrl, function(response) {
	// console.log(response)
	// response.setEncoding("utf8")
	// response.on("data", function (data) {
	// 	// var encodedData = 
	// 	console.log(data.length)
	// })

	response.pipe(bl(function (err, data) {
		console.log(data.toString().length)
		console.log(data.toString())
	}))
});

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })

────────────────────────────────────────────────────────────────────────────────
*/