var fs  = require("fs"), t = undefined, w;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (l) {
    if (l != "") {
    	if (t === undefined) {
    		t = parseInt(l[0]);
    		w = new Array(t)
    	} else{
    		w.push(l);
    	}
    }
});

// for(var i = 0; i < t; i++){
// 	console.log(w[i].toString());
// }