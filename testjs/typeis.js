var winston = require('winston')
// 각 방식의 차이가 무엇인가??

function trace(obj) {
	console.log("");
	console.log(typeof obj);
	console.log(obj);
	winston.log('info', obj)
}

var myString1 = new Object("foo");	// Object랑 String랑 같네.
trace(myString1);

var myString2 = new String("foo");	// Object랑 String랑 같네.
trace(myString1);

var myString3 = "foo";
trace(myString3);

/*
object
[String: 'foo']
info:  0=f, 1=o, 2=o

object
[String: 'foo']
info:  0=f, 1=o, 2=o

string
foo
info: foo
*/