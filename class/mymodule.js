// this is module.
// 3 param : directory name, filename extension, callback function

module.exports = function (dirName, fileExt, callback) {
	var fs = require('fs')
	var path = require('path')

	fs.readdir(dirName, function extractFile(err, files) {
		if (err) {
			return callback(err, null)
		}

		var fileList = []
		files.forEach(function (item) {
			if (path.extname(item) == '.' + fileExt) {
				fileList.push(item)
			}	
		})

		return callback(null, fileList)

	})


}






