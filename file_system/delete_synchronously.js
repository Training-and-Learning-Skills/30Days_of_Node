var fs = require('fs')
var filename = 'msg.txt';
fs.unlinkSync(filename);
console.log('File Deleted Successfully');
