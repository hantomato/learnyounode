// event
// process.exit : 프로세스 종료시에 호출
// process.uncaughtException : 예외 발생시 호출. 이게 호출됬다는것은 프로세스가 예외로 인해 종료된 것임.

// setMaxListeners(limit)
// removeListener(eventName, handler)	// 이벤트 리스터 제거
// removeAllListener([eventName])		// 이벤트 리스터 제거

// once(eventName, eventHandler)		// 이벤트 리스터를 한 번만 연결합니다.

// emit(event, [arg1], [arg2], [...])	// 이벤트를 실행합니다.

// Node.js 에선 이벤트를 연결할 수 있는 모든 객체는 EventEmitter 객체의 상속을 받음.
// [EventEmitter method]
// addEventListener(eventName, eventHandler)	// 이벤트를 연결합니다.
// on(eventName, eentHandler)				// 이벤트를 연결합니다.
// setMaxListeners(limit)					// 이벤트 연결 개수를 조절합니다.
// removeListener(eventName, handler)		// 특정 이벤트의 이벤트 리스너를 제거합니다.
// removeAllListener([eventName])			// 모든 이벤트 리스너를 제거합니다.
// once(eventName, eventHandler)			// 이벤트를 한 번만 연결합니다.

console.log("start")

process.on('exit', function() {
	console.log("exit 1")
})
process.on('exit', function() {
	console.log("exit 2")
})

process.on('uncaughtException', function(error) {
	console.log("uncaughtException : " + error);
})

process.mmmmmm('')
console.log("program end (this will not be called)")
