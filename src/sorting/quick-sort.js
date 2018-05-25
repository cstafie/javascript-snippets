module.exports = {
	quickSort: quickSortWrapper
};

function quickSortWrapper(a, c) {
	c = c ? c : (a,b) => a < b;
	quickSort(a, 0, a.length - 1, c);
	return a;
}

function random(lo, hi) {
	return Math.floor(Math.random() * (hi - lo) + lo);
}

function swap(a, x, y) {
	let temp = a[x];
	a[x] = a[y];
	a[y] = temp;
}

function quickSort(a, lo, hi, c) {
	if (hi - lo < 1) return;
	
	let r = random(lo, hi),
		p = a[r],
		i = lo,
		j = hi;

	while (true) {
		while (c(a[i], p)) i++;
		while (c(p, a[j])) j--;

		if (i >= j) break;
		swap(a, i, j);
	}

	quickSort(a, lo, j-1, c);
	quickSort(a, j+1, hi, c); 
}