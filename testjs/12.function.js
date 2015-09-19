// function 정의 방법들..
// 책에는 3가지(+ 번외 1개 더) 있다고 함.
// (1) 함수 생성자 - Function 키워드 사용. 마지막 매개변수는 로직임.
// (2) 함수 선언문
// (3) 함수 표현식

var sum1 = new Function('a', 'b', 'return a+b');	// Function 의 F 대문자임. (1) 함수 생성자 방식

var sum11 = new Function('a, b', 'return a+b');	//  <= (1) 함수 생성자 방식

var sum111 = Function('a', 'b', 'return a+b');	// 이경우 new 없어도 됨. <= (1) 함수 생성자 방식

function sum2(a, b) { return a+b;};				// (2) 함수 선언문 방식

var sum3 = function(a, b) { return a+b;};		// (3) 함수 표현식

var sum4 = function temp(a, b) { return a+b;};	// 기명 함수 표현식 (즉, 함수 이름을 포함한 함수 표현식)


var sumCopy = sum2;


console.log(sum1(3,5))
console.log(sum11(3,5))
console.log(sum111(3,5))
console.log("")
console.log(sum2(3,5))
console.log(sum3(3,5))
console.log(sum4(3,5))
console.log(sumCopy(3,5))

