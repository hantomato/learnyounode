// typeof는 아래 primitive 타입을 구한다. 리턴값은 스트링임.
	// 'undefined'
	// 'boolean'
	// 'number'
	// 'string'
	// 'object'
	// 'function'

var myNumber = new Number(23);			// new를 시용해서 객체를 생성했으니, 이건 복합객체인가..
var myString = new String('male');
var myBoolean = new Boolean('false');

console.log(myNumber, myString, myBoolean)
console.log(typeof myNumber, typeof myString, typeof myBoolean)
console.log("")

/*
[Number: 23] [String: 'male'] [Boolean: true]
object object object
*/

var myNumber2 = Number(23);
var myString2 = String('male');	
var myBoolean2 = Boolean('false');

console.log(myNumber2, myString2, myBoolean2)
console.log(typeof myNumber2, typeof myString2, typeof myBoolean2)
console.log("")

/*
23 'male' true
number string boolean
*/

// 주의 : null 은 type이 object 이다.
var aaa = undefined;
var bbb = null;
console.log(typeof aaa, typeof bbb)		// undefined object

// 주의
var myVariable = null;
console.log(typeof myVariable === 'object')		// true
myVariable = {};
console.log(typeof myVariable === 'object')		// true

// null 이 아닌 object 인지 체크
myVariable = null;
console.log(myVariable != null && typeof myVariable === 'object')	// false
console.log(!!myVariable && typeof myVariable === 'object')			// false

myVariable = {};
console.log(myVariable != null && typeof myVariable === 'object')	// true
console.log(!!myVariable && typeof myVariable === 'object')			// true

// 참고 : http://unikys.tistory.com/260



