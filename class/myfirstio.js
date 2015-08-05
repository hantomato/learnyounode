var fs = require('fs')

var buffer = fs.readFileSync(process.argv[2])
var content = buffer.toString()
var splitText = content.split('\n')

console.log(splitText.length - 1)
