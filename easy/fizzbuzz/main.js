/*Sample code to read in test cases: */
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	var fizz = line.split(' ')[0];
    	var buzz = line.split(' ')[1];
    	var nMax = line.split(' ')[2];
    	var answer = "";
		for(var idx = 1; idx <= nMax; idx++){
			if (idx % fizz == 0 && idx % buzz == 0){
				answer += ' FB';
			}
			else if (idx % fizz == 0){
				answer += ' F';
			}	
			else if (idx % buzz == 0){ 
				answer += ' B';
			}
			else {
				answer += ' ' + idx;
			}
		}

		console.log(answer);
    }
});