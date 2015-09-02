var net = require('net')
var strftime = require('strftime')


var server = net.createServer(function (socket) {
	var date = new Date()


	// var time = date.getFullYear()
	// time += "-"
	// time += date.getMonth()
	// time += "-"
	// time += date.getDate()
	// time += " "
	// time += date.getHours()
	// time += ":"
	// time += date.getMinutes()

	var time = strftime('%Y-%m-%d %H:%M')
	socket.end(time)
})

server.listen(process.argv[2])



/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var net = require('net')

    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))

────────────────────────────────────────────────────────────────────────────────
*/