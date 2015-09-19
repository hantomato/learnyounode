// arguments.length 와 함수 인스턴스의 length

// arguments.length : 실제로 넘어온 argument 갯수
// 함수 인스턴스의 length : 선언된 매개변수 갯수

var myFunction = function(a, b, c) {
	return arguments.length;
}

console.log(myFunction(3,4,5))		// 3
console.log(myFunction(3,4,5,6,7))	// 5
console.log(myFunction())			// 0

var myFunction2 = function(a, b, c, d, e) {
	return myFunction2.length;				// 함수 인스턴스의 length = 선언된 매개변수 갯수
}

console.log(myFunction2(3,4,5))		// 5

var myFunction3 = function(a, b, c, d, e, f, g) {
	return arguments.callee.length;			// callee를 이용해 현재 실행중인 함수의 참조를 구함.
}

console.log(myFunction3(3,4,5))		// 5
