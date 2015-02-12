var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');

var parser = tar.Parse();
var data = process.stdin;
var chiper = process.argv[2];
var pass = process.argv[3];
var stream = crypto.createDecipher(chiper, pass);
var z = zlib.createGunzip();
// fails BAD dunno why (unhadled error)
parser.on('entry', function(e) {
	if (e.type !== 'File') return;
	var h = crypto.createHash('md5', { ecoding: 'hex' });

	 return e.pipe(h);

	function end () { 
		this.queue(' ' + e.path + '\n')
	}
})

data.pipe(stream).pipe(z).pipe(parser).pipe(process.stdout);