// The module must export a single funciton that takes three arguments
var mymodule = require('./mymodule.js')

var dirPath = process.argv[2]
var ext = process.argv[3]

mymodule(dirPath, ext, function tempFunc(err, filelist) {
	if (err) {
		console.log("MYERROR>> " + err)
		return
	}

	filelist.forEach(function (filename) {
		console.log(filename)
	})
	
})