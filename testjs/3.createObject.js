//////////////////////////////////////////////////
// 객체 생성 4가지 방식

// 객체 생성
var Person1 = function (living, age, gender) {
	this.living = living;
	this.age = age;
	this.gender = gender;
	this.getGender = function() { return this.gender;};
	// 주의 : return 없음.
}

// 객체 생성
function Person2(living, age, gender) {
	this.living = living;
	this.age = age;
	this.gender = gender;
	this.getGender = function() { return this.gender;};
	// 주의 : return 없음.
}

// 객체 생성 : new Object 사용
function Person3(living, age, gender) {
	var obj = new Object();
	obj.living = living;
	obj.age = age;
	obj.gender = gender;
	obj.getGender = function() { return obj.gender;};
	return obj;
}

// 객체 생성 : json 방식 사용
function Person4(living, age, gender) {
	return {living:living, age:age, gender:gender, getGender:function() { return gender;}};
}

function trace(obj) {
	console.log("");
	console.log(typeof obj);
	console.log(obj);
	console.log(obj.constructor);
}

var person1 = new Person1(true, 33, "male");
trace(person1);

var person2 = new Person2(false, 34, "male");
trace(person2);

var person3 = Person3(true, 35, "male");
trace(person3);

var person4 = Person4(false, 36, "male");
trace(person4);

/* result
object
{ living: true, age: 33, gender: 'male', getGender: [Function] }
[Function]

object
{ living: false, age: 34, gender: 'male', getGender: [Function] }
[Function: Person2]

object
{ living: true, age: 35, gender: 'male', getGender: [Function] }
[Function: Object]

object
{ living: false, age: 36, gender: 'male', getGender: [Function] }
[Function: Object]
*/