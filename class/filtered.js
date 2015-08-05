var fs = require('fs')

/*
fs.readdir(process.argv[2], function callback(err, list) {
	for ( var i=0; i<list.length; ++i) {
		var listWord = list[i].split('.');

		var ext = listWord[listWord.length - 1];
		if ( listWord.length == 1 )
			ext = '';
		if ( ext == process.argv[3] ) {
			console.log(list[i])
		}
	}
})
*/


var path = require('path')

fs.readdir(process.argv[2], function callback(err, list) {
	list.forEach(function (item) {
		if ( path.extname(item) == '.' + process.argv[3] ) {
			console.log(item)
		}	
	})
})







