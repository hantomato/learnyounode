// 파라미터로 url 3개 주어짐.

http = require('http')
var bl = require('bl')
// var async = require('async')
var after = require('after')

var result = [];
var end = after(3, printLog)	//end method가 세번 호출되면 printLog method가 호출됨.

function printLog() {
	for (var i=0; i<3; i++) {
		console.log(result[i])
	}
}

function httpGet(idx) {
	http.get(process.argv[2 + idx], function(response) {
		response.pipe(bl(function (err, data) {
			// console.log(data.toString())
			result[idx] = data.toString()
			end();
		}))
	});
}

for (var i=0; i<3; i++) {
	httpGet(i)
}

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3)
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)

────────────────────────────────────────────────────────────────────────────────
*/