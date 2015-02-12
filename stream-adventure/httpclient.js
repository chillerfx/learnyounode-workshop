var request = require('request');
var data = process.stdin;
var r = request.post('http://localhost:8000')
data.pipe(r).pipe(process.stdout);