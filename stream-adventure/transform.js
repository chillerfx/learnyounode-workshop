var through = require('through');
var data = process.stdin;
var tr = through(transform);

function transform(buf) {
	var string = buf.toString()
	var u = string.toUpperCase()
	this.queue(u);
};
data.pipe(tr).pipe(process.stdout);
