var crypto = require('crypto');
var data = process.stdin;
var pass = process.argv[2];
var stream = crypto.createDecipher('aes256', pass);

data.pipe(stream).pipe(process.stdout);