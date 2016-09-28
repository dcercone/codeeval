/*Sample code to read in test cases: */
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	line = line.split(",");
    	console.log((line[0].indexOf(line[1]) == -1 ? 0 : 1));
    }
});