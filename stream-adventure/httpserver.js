var http = require('http');
var through = require('through');
var port = process.argv[2];


function transform(buf) {	
	this.queue(buf.toString().toUpperCase());
};

http.createServer(function (req, res) {
	//if (req.method === "POST") { 				//test fails with if check! dfq
		req.pipe(through(transform)).pipe(res);
	//} 
}).listen(port);