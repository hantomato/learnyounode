// instanceof
// 1. 자바스크립트의 모든 객체는 Object() 생성자를 상속하므로,
// 		어떤 객체가 Object()의 인스턴스인지 물으면 항상 true를 반환한다.

// 2. instanceof 연산자를 사용해 원시값이 해당하는 객체 래퍼의 인스턴스인지 묻는 경우
//		항상 false 반환.
// 		ex) 'foo' instanceof String => false
// 		만약 new 연산자를 사용해 'foo' 문자열을 만들었다면, instanceof 연산자는 true 반환한다고???

// 따라서 객체를 반환하는 생성자 함수를 통해 만든 복합 객체 또는 인스턴스에만 instanceof 사용해라!!


var myArray = new Array();
myArray.prop = 'test';
myArray.prop2 = 'test2';
console.log(myArray)