

var myNumber = new Number();
myNumber.prop = 'test';
console.log(myNumber)

var myNumber2 = 11;
myNumber2.prop = 'test';	//원시/리터럴 값에는 인스턴스 속성을 설정할 수 없다.
console.log(myNumber2)
/*
{ [Number: 0] prop: 'test' }
11
*/