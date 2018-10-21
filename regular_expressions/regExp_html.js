var fs = require('fs');
var filename = 'data.html';
var str = fs.readFileSync(filename).toString();
var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

var myArray = str.match( pattern );
var len = myArray.length;
console.log("Occurrences of pattern in the string is : " + len);

