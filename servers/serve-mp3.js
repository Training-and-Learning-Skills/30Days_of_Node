var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	//change MIME type to 'audio/mp3'
	res.writeHead(200, {'Contet-Type': 'audio/mp3'});
	fs.exists('audio.mp3', function(exists){
		if(exists)
		{
			var rstream = fs.createReadStream('audio.mp3');
			rstream.pipe(res);
		}
		else{
			res.end("Its a 404");
		}
	});
}).listen(3000);
