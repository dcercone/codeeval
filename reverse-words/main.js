/*Sample code to read in test cases: */
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	var value = line.trim().split(' ');
    	if (value.length > 0 && value[0] != ''){
    		console.log(value.reverse().join(' '));
    	}
    }
});