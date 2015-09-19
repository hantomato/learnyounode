// call, apply에 대해 알아보자.

var greet = {
	runGreet: function() {
		console.log(this.name, arguments[0], arguments[1])
	}
}

greet.runGreet()		// undefined undefined undefined

var cody = {name: 'cody'};
var lisa = {name: 'lisa'};

greet.runGreet.call(cody, 'foo', 'bar')			// cody foo bar
greet.runGreet.apply(lisa, ['foo', 'bar'])		// lisa foo bar


// 자기 호출 표현식
var sayWord = function() { console.log('hahaha')}();	// () 넣으면 바로 수행.
// sayWord();	// 위에처럼 바로 선언과 동시에 수행해버리면, sayWord()를 쓸수 없네. undefined 로 뜸.

//////////////////////////////////////////////////
////////// 실제로 많이 쓰이는 구문 ////////////////////

// 스스로 호출되는 익명 함수 선언문. 실제로 많이 쓰임.
(function(msg) {
	console.log(msg);
})('hi');

(function(msg) {
	console.log(msg);
}('hihi'));

!function sayHi(msg) {console.log(msg);}('h~i');	// 앞에 ! 없으면 동작하지 않음.




