// reference 테스트
// object는 참조만 복사되고, 실제 값은 복사되지 않음. 

var myObject = {};
var copyOfMyObject = myObject;	// 값이 아닌 참조만 복사됨.
myObject.foo = 'bar';

console.log(myObject, copyOfMyObject);		// 값이 같음. { foo: 'bar' } { foo: 'bar' }
console.log("");

var myObject2 = new String("myObject2");
var copyOfMyObject2 = myObject2;
myObject2.foo = "bar"

console.log(myObject2);				// 값이 같음. { [String: 'myObject2'] foo: 'bar' }
console.log(copyOfMyObject2)		// { [String: 'myObject2'] foo: 'bar' }
console.log("");

var myObject3 = new String("myObject3");
var copyOfMyObject3 = myObject3;
myObject3 = new String("change value");		// 신규 할당이라서 값이 틀림
console.log(myObject3);
console.log(copyOfMyObject3)
console.log("");

// 복합객체의 비교는 주소가 같아야 같은 것이다.
var objectFoo = {same: 'same'};
var objectBar = {same: 'same'};
var copyOfFoo = objectFoo;
console.log(objectFoo === objectBar);	// false
console.log(objectFoo == objectBar);	// false

console.log(objectFoo === copyOfFoo);	// true
console.log(objectFoo == copyOfFoo);	// true

console.log(objectFoo === objectFoo);	// true
console.log(objectFoo == objectFoo);	// true






