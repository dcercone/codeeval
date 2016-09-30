/*Sample code to read in test cases: */

function swap(i,l,r){
	var _t = i[l];
	i[l] = i[r];
	i[r] = _t;	

	var temp = w[l];
	w[l] = w[r];
	w[r] = temp;
}
function partition(i,l,r){
	var p = i[Math.floor((l+r)/2)];
	while(l <= r){
		while(i[l] > p){
			l++;
		}
		while(i[r] < p){
			r--;
		}
		if(l <= r){
			swap(i,l,r);
			l++;
			r--;
		}
	}
	return l;
}

function quicksort(i,l,r){
	var x;
	if(i.length > 1){
		x = partition(i,l,r);
		if(l < (x - 1)){
			quicksort(i,l,(x - 1));
		}
		if(x < r){
			quicksort(i,x,r);
		}
	}
	return i;
}

var fs  = require("fs"), t = undefined, w = new Array(), n = new Array();
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (l) {
    if (l != "") {
    	if (t === undefined) {
    		t = parseInt(l[0]);
    	} else{
    		w.push(l);
    		n.push(l.length);
    	}
    }
});

quicksort(n,0,(n.length-1));

for(var i = 0; i < t; i++){
	console.log(w[i].toString());
}