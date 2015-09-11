function start() {
	console.log("Request handler 'start' was called.")

	function sleep(milliseconds) {
		var startTime = new Date().getTime();
		console.log(startTime);
		while (new Date().getTime() < startTime + milliseconds) {
			;
		}
		console.log("out");
	}
	sleep(3000);
}

function upload() {
	console.log("Reqeust handler 'upload' was called.")
}

exports.start = start;
exports.upload = upload;