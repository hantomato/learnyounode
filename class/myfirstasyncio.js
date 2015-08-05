var fs = require('fs')

fs.readFile(process.argv[2], function checkLineCode(err, fileContent) {
	var lineCnt = fileContent.toString().split('\n').length -1 
	console.log(lineCnt)
})
