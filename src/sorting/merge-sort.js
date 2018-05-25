module.exports = {
  mergeSort: mergeSort
};

function mergeSort(a, c) {
	if (a.length <= 1) return a;
	c = c ? c : (a,b) => a < b;

	let m = Math.floor(a.length/2),
		l = mergeSort(a.slice(0,m),c),
		r = mergeSort(a.slice(m),c);

	return merge(l,r,c);
}

function merge(l,r,c) {
	let result = [],
		li = 0,
		ri = 0;
	
	while (li < l.length && ri < r.length) {
		result.push( c(l[li], r[ri]) ? l[li++] : r[ri++]);
	}

	return result.concat(l.slice(li)).concat(r.slice(ri));
}