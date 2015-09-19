// var os = require('os')
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.release());
// console.log(os.uptime());
// console.log(os.loadavg());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.getNetworkInterfaces());

var url = require('url');
var res = url.parse('http://www.hand.co.kr/track/999');
console.log(res);

var querystring = require('querystring')