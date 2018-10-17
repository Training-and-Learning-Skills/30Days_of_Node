var fs = require('fs');
var filename = 'cnt.txt';
var content = fs.readFileSync(filename);
console.log('Content : ' + content);
