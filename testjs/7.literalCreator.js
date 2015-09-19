var winston = require('winston')

// 객체 생성시 new Foo(), new Bar() 같은 방식 말고도,
// 리터럴(literal) 이라는 축약 표현이 있다.

/*
var myNumber = new Number(23)
	object
	[Number: 23]		- type
	[Function: Number]
	info:

var myNumberLiteral = 23;
	number 				- type
	23
	[Function: Number]
	info: 23
*/

var myNumber = new Number(23);		// 객체
var myNumberLiteral = 23;			// 원시 숫자값, 객체가 아님.
var myString = new String('male');	// 객체
var myStringLiteral = 'male';		// 원시 문자열값, 객체가 아님.
var myBoolean = new Boolean('false');	
var myBooleanLiteral = false;			
var myObject = new Object();
var myObjectLiteral = {};
var myArray = new Array('foo', 'bar');
var myArrayLiteral = ['foo', 'bar'];
var myFunction = new Function("x", "y", "return x*y");
var myFunctionLiteral = function(x, y) {return x*y};
var myRegExp = new RegExp('\bt[a-z]+\b');
var myRegExpLiteral = /\bt[a-z]+\b/;
//var myDate = new Date();
//var myError = new Error('Crap!');

function trace(obj) {
	console.log("");
	console.log(typeof obj);		// function 빼곤 다들 타입이 object 이네
	console.log(obj);
	console.log(obj.constructor);	// new 뒤에 사용한것들이 생성자로 나오네. Number, String, Boolean 같은 것들 
	winston.log('info', obj)
}

trace(myNumber);
trace(myNumberLiteral);
trace(myString);
trace(myStringLiteral);
trace(myBoolean);
trace(myBooleanLiteral);
trace(myObject);
trace(myObjectLiteral);
trace(myArray);
trace(myArrayLiteral);
trace(myFunction);
trace(myFunctionLiteral);
trace(myRegExp);
trace(myRegExpLiteral);

/*
object
[Number: 23]
[Function: Number]
info:

number
23
[Function: Number]
info: 23

object
[String: 'male']
[Function: String]
info:  0=m, 1=a, 2=l, 3=e

string
male
[Function: String]
info: male

object
[Boolean: true]
[Function: Boolean]
info:

boolean
false
[Function: Boolean]
info: false

object
{}
[Function: Object]
info:

object
{}
[Function: Object]
info:

object
[ 'foo', 'bar' ]
[Function: Array]
info:  0=foo, 1=bar

object
[ 'foo', 'bar' ]
[Function: Array]
info:  0=foo, 1=bar

function
[Function]
[Function: Function]
info:

function
[Function]
[Function: Function]
info:

object
t[a-z]/
{ [Function: RegExp]
  input: [Getter/Setter],
  multiline: [Getter/Setter],
  lastMatch: [Getter/Setter],
  lastParen: [Getter/Setter],
  leftContext: [Getter/Setter],
  rightContext: [Getter/Setter],
  '$1': [Getter/Setter],
  '$2': [Getter/Setter],
  '$3': [Getter/Setter],
  '$4': [Getter/Setter],
  '$5': [Getter/Setter],
  '$6': [Getter/Setter],
  '$7': [Getter/Setter],
  '$8': [Getter/Setter],
  '$9': [Getter/Setter] }
info: t[a-z]/

object
/\bt[a-z]+\b/
{ [Function: RegExp]
  input: [Getter/Setter],
  multiline: [Getter/Setter],
  lastMatch: [Getter/Setter],
  lastParen: [Getter/Setter],
  leftContext: [Getter/Setter],
  rightContext: [Getter/Setter],
  '$1': [Getter/Setter],
  '$2': [Getter/Setter],
  '$3': [Getter/Setter],
  '$4': [Getter/Setter],
  '$5': [Getter/Setter],
  '$6': [Getter/Setter],
  '$7': [Getter/Setter],
  '$8': [Getter/Setter],
  '$9': [Getter/Setter] }
info: /\bt[a-z]+\b/
*/
