var concat = require('concat-stream');
var data = process.stdin;
function reverse (data) {
	data = data.toString().split('').reverse().join('');
	console.log(data);
}
data.pipe(concat(reverse));