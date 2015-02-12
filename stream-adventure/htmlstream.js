// i have no clue why it works like it works
var trumpet = require('trumpet');
var through = require('through')

var data = process.stdin;
var tr = through(transform);
var tru = new trumpet();

var loud = tru.select('.loud').createStream();
loud.pipe(tr).pipe(loud);

data.pipe(tru).pipe(process.stdout);

function transform(buf) {
	this.queue(buf.toString().toUpperCase());
};
