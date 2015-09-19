var winston = require('winston')

// 9가지 native 생성자
// typeof 치면 모두 function 한개에 나머지는 모두 object 이다.

var myNumber = new Number(23);			// object 타입에, 생성자는 Number.
var myString = new String('male');		// object 타입에, 생성자는 String.
var myBoolean = new Boolean('false');
var myObject = new Object();
var myArray = new Array('foo', 'bar');
var myFunction = new Function("x", "y", "return x*y");
var myDate = new Date();
var myRegExp = new RegExp('\bt[a-z]+\b');
var myError = new Error('Crap!');

function trace(obj) {
	console.log("");
	console.log(typeof obj);		// function 빼곤 다들 타입이 object 이네
	console.log(obj);
	console.log(obj.constructor);	// new 뒤에 사용한것들이 생성자로 나오네. Number, String, Boolean 같은 것들 
	winston.log('info', obj)
}

trace(myNumber);
trace(myString);
trace(myBoolean);
trace(myObject);
trace(myArray);
trace(myFunction);
trace(myDate);
// trace(myRegExp);
// trace(myError);

/*
object
[Number: 23]
[Function: Number]
info:

object
[String: 'male']
[Function: String]
info:  0=m, 1=a, 2=l, 3=e

object
[Boolean: true]
[Function: Boolean]
info:

object
{}
[Function: Object]
info:

object
[ 'foo', 'bar' ]
[Function: Array]
info:  0=foo, 1=bar

function
[Function]
[Function: Function]
info:

object
Sat Sep 05 2015 20:11:51 GMT+0900 (JST)
[Function: Date]
info:
*/
