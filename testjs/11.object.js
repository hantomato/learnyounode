// 이미 선언된 Object에 property 를 추가할수 있다.

Object.prototype.foo = 'foo'
Object.prototype.foo2 = 'foo2'
var myString = {'age':39, 'sex':'male'};
console.log(myString)

for (var vvv in myString)
{
	console.log(vvv, myString[vvv]);
}

console.log("----------");
for (var vvv in myString)
{
	if (myString.hasOwnProperty(vvv))
		console.log(vvv, myString[vvv]);
}

/*
{ age: 39, sex: 'male' }
age 39
sex male
foo foo
foo2 foo2
----------
age 39
sex male
*/