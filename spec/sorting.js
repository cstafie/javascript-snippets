let sorting = require('./../src/sorting/merge-sort')

describe('SORT TESTING:', () => {

	let comp = (a,b) => a > b;

	describe('merge sort recursion', () => {
	  it ('should sort the empty list', () => {
	  	expect(sorting.mergeSortRecursion([])).toEqual([]);
		});	

		it ('should sort a list of length 1', () => {
	  	expect(sorting.mergeSortRecursion([0])).toEqual([0]);
		});	

		it ('should sort a list of numbers', () => {
	  	expect(sorting.mergeSortRecursion([8,1,4,3,7,5,2,6]))
	  		.toEqual([1,2,3,4,5,6,7,8]);
		});	

		it ('should sort a list of numbers of odd length', () => {
	  	expect(sorting.mergeSortRecursion([8,1,4,3,7,5,2,6,13,10,11,9,12]))
	  		.toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13]);
		});	

		it ('should use a custom comparator', () => {
	  	expect(sorting.mergeSortRecursion([2,3,4,1],comp))
	  		.toEqual([4,3,2,1]);
		});	
	});
});


