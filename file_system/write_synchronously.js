//Writing a File synchronously
var fs = require('fs')

var content = "We are writing this file synchronously";

fs.writeFileSync('content.txt', content);
console.log("File Written Successfully");
