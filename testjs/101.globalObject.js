
// filename, dirname
console.log("filename: " + __filename);
console.log("dirname:  " + __dirname);

// log 색상 변경. (콘솔 색이 변경되는거 같음)
console.log('\u001b[31m', "log 색상 변경.")		// red
console.log('\u001b[32m', "log 색상 변경.")		// green
console.log('\u001b[33m', "log 색상 변경.")		// 옅은 노랑
console.log('\u001b[34m', "log 색상 변경.")		// 하늘색
console.log('\u001b[35m', "log 색상 변경.")		// 분홍
console.log('\u001b[36m', "log 색상 변경.")		// 노랑
console.log('\u001b[0m')						// 기본색

// log
console.log("%d, %s, %d", 77, "hahaha", 88, "kekeke")
console.log("%j", {"name":"nomoonjin", age:39})


// 성능측정
console.time("tag");
// doing process
console.timeEnd("tag");

// process
// argv		실행 매개변수
// env			컴퓨터 환경 관련 정보
// version 	Node.js 버전
// versions	Node.js와 종속된 프로그램 버전
// arch		프로세서의 아키텍처
// platform	플랫폼
console.log("")
console.log("process.env : " + process.env)
console.log("process.version : " + process.version)
console.log("process.versions : " + process.versions)
console.log("process.arch : " + process.arch)
console.log("process.platform : " + process.veplatformrsion)
console.log("process.memoryUsage() : " + process.memoryUsage())
console.log("process.uptime() : " + process.uptime())







