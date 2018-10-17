var fs = require('fs');

fs.readFile('msg.txt', (err,data) => {
	if(err)
		throw err;
	console.log("Content : " + data);
});
