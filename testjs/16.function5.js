// 자바스크립트는 참 골때리군..

var foo = false;
var bar = false;

// 함수의 매개변수는 함수 내부에서 재정의 될수 있다고 하는데..
var myFunction = function(foo, bar) {
	arguments[0] = true;
	bar = true;
	console.log(arguments[0], bar);				// true, true
	console.log(arguments[0], arguments[1]);	// true, undefined <- 이거 아주 골때리군
	console.log(foo, bar);						// undefined, true <- 이것도 골때리군.
	// bar 랑 arguments[1] 과 틀리단건가?
	// foo 랑 arguments[0] 하고도 틀리고..
}

myFunction();			
// console.log(foo);		// false 이건 당연한것이겠지, foo가 복합 객체가 아니니.
// console.log(bar);		// false