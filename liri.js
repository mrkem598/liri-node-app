// Grab the data from keys.js. 
var fs = require('fs');
// Read the file from the txt file
fs.readFile("random.txt", "utf8", function(error, data) {
//log the data
console.log(data);
});





