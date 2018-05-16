let sorting = require("./../src/sorting/merge-sort");

describe("SORT TESTING:", () => {
  let comp = (a, b) => a > b;
  let sortAsc = (a, b) => a - b;
  let sortDesc = (a, b) => b - a;

  let emptyArray = [];
  let arrayOfLength1 = [0];
  let evenLengthArray = [8, 1, 4, 3, 7, 5, 2, 6];
  let oddLengthArray = [8, 1, 4, 3, 7, 5, 2, 6, 13, 10, 11, 9, 12];

  describe("merge sort recursion", () => {
    it("should sort the empty list", () => {
      expect(sorting.mergeSortRecursion(emptyArray)).toEqual(emptyArray);
    });

    it("should sort a list of length 1", () => {
      expect(sorting.mergeSortRecursion(arrayOfLength1)).toEqual(
        arrayOfLength1
      );
    });

    it("should sort a list of numbers", () => {
      expect(sorting.mergeSortRecursion(evenLengthArray)).toEqual(
        evenLengthArray.sort(sortAsc)
      );
    });

    it("should sort a list of numbers of odd length", () => {
      expect(sorting.mergeSortRecursion(oddLengthArray)).toEqual(
        oddLengthArray.sort(sortAsc)
      );
    });

    it("should use a custom comparator", () => {
      expect(sorting.mergeSortRecursion(evenLengthArray, comp)).toEqual(
        evenLengthArray.sort(sortDesc)
      );
    });
  });
});
