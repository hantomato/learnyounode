//console.log(process.argv)
var idx = process.argv.length - 1;
var sum = 0;
do {
//sum += +process.argv[idx];
sum += Number(process.argv[idx]);

} while(--idx > 1)

console.log(sum)
