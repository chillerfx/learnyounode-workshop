var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');

module.exports = function () {
	var s = split('\n');
	var t = through(write, end);
	var z = zlib.createGzip();
	var current;
	
	return combine(s, t, z);

	function write (buf) {
		if (buf.length === 0) return;
		var line = JSON.parse(buf);

		if (line.type === 'genre')  {
			 if (current) {
			 	this.queue(JSON.stringify(current) + '\n');
			}
			current = { name: line.name, books: [] };
		} else if (line.type === 'book') {
			current.books.push(line.name)
		}
	}
	 function end () {
        if (current) {
            this.queue(JSON.stringify(current) + '\n');
        }
        this.queue(null);
    }
}