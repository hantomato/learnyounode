// in : 특정 메소드를 포함하는지 여부 구하기. 프로토타입 체인을 모두 조사.
// hasOwnProperty : 상동. 자기 자신만 조사

var myArray = ['foo', 'bar'];
myArray.name = "test"
console.log(myArray.hasOwnProperty('join'))		// false
console.log(myArray.hasOwnProperty('name'))		// true
console.log('name' in myArray);		// true
console.log('join' in myArray);		// true
console.log('abab' in myArray);		// false
console.log("");

var myObject = {foo:'value'}
console.log('toString' in myObject)		// true
console.log(myArray.hasOwnProperty('toString'))		// false
console.log("");

var cody = { age:23, gender:'male'};
for (var key in cody) {
	if (cody.hasOwnProperty(key)) {		// 이거 안하면 상속받은 속성까지 표시됨.
		console.log(key, cody[key])		
	}
}

var array1 = ['aaa', 'bbb'];
for (var key in array1) {
	console.log(key, array1[key])
}






