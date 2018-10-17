var fs = require('fs');
var content = "\nWe are Appending this file synchronously";
fs.appendFileSync('content.txt', content);
console.log("File Appendend Successfully");
