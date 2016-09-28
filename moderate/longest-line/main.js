/*Sample code to read in test cases: */
var fs  = require("fs"), t = undefined, w = new Array();
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (l) {
    if (l != "") {
    	if (t === undefined) {
    		t = parseInt(l[0]);
    	} else{
    		w.push(l);
    	}
    }
});



for(var i = 0; i < t; i++){
	console.log(w[i].toString());
}