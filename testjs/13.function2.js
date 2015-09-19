var winston = require('winston')

var sum = function() {
	return arguments[0] + arguments[1];
}

console.log(sum(3,4))		// 7
console.log(sum(3))			// NaN
console.log(sum())			// NaN
console.log(sum(3,4,5))		// 7
console.log("")

var myObject1 = {
	name: 'myObject1',
	myMethod: function() { console.log(this);}		// 이 this는 myObject1 이네
}

myObject1.myMethod();

var myObject2 = function() {console.log(this);}		// 이 this는 Window 라고하네.

// myObject2();

var foo = function foo() {
	console.log(arguments.callee);					// callee는 foo 임.
}
foo();








