var through = require('through');
var split = require('split')
var data = process.stdin;
var tr = through(transform);
var i=0;
 var u;
function transform(buf) {
	var string = buf.toString()
	if(i % 2 === 0) {
		u = string.toLowerCase() + '\n';
	} else {
		u = string.toUpperCase() + '\n';
	}
	i++;
	this.queue(u);	
};
data.pipe(split('\n')).pipe(tr).pipe(process.stdout);
