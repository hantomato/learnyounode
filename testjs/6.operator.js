// 비교 연산자
// 일반적으로 비교시에 두개의 타입이 틀리면 자동 형변환을 수행 후에 비교를 한다. ===, !== 만 예외.

// 자바스크립트에서는 아래 6가지 타입을 제외하고는 모두 true 임.
	// ””             (빈 문자열) 
	// NaN          (Not a Number) 
	// undefined  (정의되지 않은 값) 
	// null           (Null값) 
	// false         (기본 boolean false) 
	// 0              (숫자 0)

// === 비교는 타입도 일치해야함.

console.log("1 == 1 ", 1 == 1)			// true
console.log("1 == '1' ", 1 == '1' )		// true
console.log("1 == '2' ", 1 == '2' )		// false
console.log("undefined == null ", undefined == null)	// true
console.log("NaN == NaN ", NaN == NaN)					// false <- 이건 잘 모르겠군

console.log("")
console.log("1 === 1 ", 1 === 1)		// true
console.log("1 === '1' ", 1 === '1')	// false
console.log("undefined === null ", undefined === null)	// false

console.log("")
console.log("1 != 1 ", 1 != 1)			// false
console.log("1 != '1' ", 1 != '1')		// false
console.log("1 != '2' ", 1 != '2')		// true

console.log(" ")
console.log("1 !== 1 ", 1 !== 1)		// false
console.log("1 !== '1' ", 1 !== '1')	// true
console.log("1 !== '2' ", 1 !== '2')	// true

/*
1 == 1  true
1 == '1'  true
1 == '2'  false
undefined == null  true
NaN == NaN  false

1 === 1  true
1 === '1'  false
undefined === null  false

1 != 1  false
1 != '1'  false
1 != '2'  true

1 !== 1  false
1 !== '1'  true
1 !== '2'  true
*/

