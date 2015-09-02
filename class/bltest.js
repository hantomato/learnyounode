const bl = require('bl')
	, fs = require('fs')

fs.createReadStream('README.md')
  .pipe(bl(function (err, data) {
  	console.log(data.toString())
  }))

