// readFile(file, encoding, callback)
// readFileSync(file, encoding)
// writeFile(file, data, encoding, callback)
// writeFileSync(file, data, encoding)

var fs = require('fs')

var data = 'hello world..';
fs.writeFile('test.txt', data, 'utf8', function (error, data) {
	if (error) {
		console.log("error!!: " + error);
	} else {
		console.log("write file async complete!")	
	}
})

try {
	fs.writeFileSync('test2.txt', data, 'utf8');
} catch (e) {
	console.log(e)
}

try {
	var text = fs.readFileSync('test.txt', 'utf8')
	console.log(text);
} catch (e) {
	console.log(e)
}

var text2 = fs.readFile('test2.txt', 'utf8', function (error, data) {
	if (error) {
		console.log("error!!: " + error);
	} else {
		console.log(data)
	}
});

