// arguments.callee 는 자기 자신을 가리킴. 즉, 현재 실행 중인 함수의 참조.
// 이를 재귀호출에 사용할 수 있음.

function trace(idx, str) {
	if (idx == 0) {
		return;
	}
	console.log(str);
	trace(--idx, str);
}

trace(5, 'aa');
console.log("");

function trace2(idx, str) {
	if (idx == 0) {
		return;
	}
	console.log(str);
	arguments.callee(--idx, str);		// arguments.callee 는 자기 자신을 가리킴.
}





trace2(3, 'bb')