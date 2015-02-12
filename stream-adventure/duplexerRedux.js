var duplexer = require('duplexer');
var through = require('through');
//hard to grasp the concept of duplexer and logic behind this problem
module.exports = function(counter) {
	//console.log(JSON.stringify(counter, '', '\n'))
	var counts = {};
	var input = through(write,end);
	return duplexer(input, counter)
	
	function write (row) {
		counts[row.country] = (counts[row.country] || 0) +1;
	}
	function end () {
		counter.setCounts(counts);
	}
};