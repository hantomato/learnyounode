var winston = require("winston")

var cody = new Object();
var nmj = new Object();

nmj.name = "honggildong"

cody.living = true;
cody.age = 33;
cody.gender = "male";
cody.friend = nmj;
cody.getGender = function() { return cody.age + 5;}

console.log(cody)
console.log("")
winston.log("info", cody)
console.log("getGender is :" + cody.getGender())