var http = require('http')
bl = require('bl')
var fs = require('fs')
var url = require('url')

var server = http.createServer(function (req, res) {

  var parseUrl = url.parse(req.url, true);
  // console.log("request url " + req.url);
  // console.log("request pathname " + parseUrl.pathname);
  // console.log("request pathname " + parseUrl.path);
  // console.log("request pathname " + parseUrl.query['iso']);



  // JSON.stringify(json, )

  res.writeHead(200, { 'Content-Type': 'application/json' })

  if (parseUrl.pathname == "/api/parsetime") {
    var iso = parseUrl.query['iso'];
    var date = new Date(iso);

    var resultJson = {
        hour:date.getHours(),
        minute:date.getMinutes(),
        second:date.getSeconds()
    }
    res.end(JSON.stringify(resultJson));
    // console.log(JSON.stringify(resultJson));

  } else if (parseUrl.pathname == "/api/unixtime") {
    var iso = parseUrl.query['iso'];
    var date = new Date(iso);

    var resultJson = {
        unixtime:date.getTime(),
    }
    res.end(JSON.stringify(resultJson));
    // console.log(JSON.stringify(resultJson));
  }


})

server.listen(process.argv[2])

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime : time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

────────────────────────────────────────────────────────────────────────────────
*/