var winston = require('winston')

var primitiveString1 = "foo";				// 타입 string
var primitiveString2 = String("foo");		// 타입 string
var primitiveString3 = new String("foo");	// 타입 object
var primitiveNumber1 = 10;
var primitiveNumber2 = Number("10");
var primitiveNumber3 = new Number("10");
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true');
var primitiveBoolean3 = new Boolean('true');



function trace(obj) {
	console.log("");
	console.log(typeof obj);		// function 빼곤 다들 타입이 object 이네
	console.log(obj);
	console.log(obj.constructor);	// new 뒤에 사용한것들이 생성자로 나오네. Number, String, Boolean 같은 것들 
}


trace(primitiveString1);
trace(primitiveString2);
trace(primitiveString3);
trace(primitiveNumber1);
trace(primitiveNumber2);
trace(primitiveNumber3);
trace(primitiveBoolean1);
trace(primitiveBoolean2);
trace(primitiveBoolean3);


/*
string
foo
[Function: String]

string
foo
[Function: String]

object
[String: 'foo']
[Function: String]

number
10
[Function: Number]

number
10
[Function: Number]

object
[Number: 10]
[Function: Number]

boolean
true
[Function: Boolean]

boolean
true
[Function: Boolean]

object
[Boolean: true]
[Function: Boolean]
*/
