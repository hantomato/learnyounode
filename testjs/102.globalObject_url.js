console.log("")
var url = require('url');
var querystring = require('querystring')
var parsedObject = url.parse('http://www.hand.co.kr/track/999?name=nmj&age=100');
console.log(parsedObject);
console.log(querystring.parse(parsedObject.query))
console.log("")
console.log("see! query field");
var parsedObject2 = url.parse('http://www.hand.co.kr/track/999?name=nmj&age=100', true);
console.log(parsedObject2);
