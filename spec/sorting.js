let MergeSort = require("./../src/sorting/merge-sort");
let QuickSort = require("./../src/sorting/quick-sort");

describe("SORT TESTING:", () => {
  let comp = (a, b) => a > b;
  let sortAsc = (a, b) => a - b;
  let sortDesc = (a, b) => b - a;

  let emptyArray = [];
  let arrayOfLength1 = [0];
  let evenLengthArray = [8, 1, 4, 3, 7, 5, 2, 6];
  let oddLengthArray = [8, 1, 4, 3, 7, 5, 2, 6, 13, 10, 11, 9, 12];

  describe("merge sort", () => {
    it("should sort the empty list", () => {
      expect(MergeSort.mergeSort(emptyArray)).toEqual(emptyArray);
    });

    it("should sort a list of length 1", () => {
      expect(MergeSort.mergeSort(arrayOfLength1)).toEqual(
        arrayOfLength1
      );
    });

    it("should sort a list of numbers", () => {
      expect(MergeSort.mergeSort(evenLengthArray)).toEqual(
        evenLengthArray.slice().sort(sortAsc)
      );
    });

    it("should sort a list of numbers of odd length", () => {
      expect(MergeSort.mergeSort(oddLengthArray)).toEqual(
        oddLengthArray.slice().sort(sortAsc)
      );
    });

    it("should use a custom comparator", () => {
      expect(MergeSort.mergeSort(evenLengthArray, comp)).toEqual(
        evenLengthArray.slice().sort(sortDesc)
      );
    });
  });

  describe("quick sort", () => {
    it("should sort the empty list", () => {
      expect(QuickSort.quickSort(emptyArray)).toEqual(emptyArray);
    });

    it("should sort a list of length 1", () => {
      expect(QuickSort.quickSort(arrayOfLength1)).toEqual(
        arrayOfLength1
      );
    });

    it("should sort a list of numbers", () => {
      expect(QuickSort.quickSort(evenLengthArray)).toEqual(
        evenLengthArray.slice().sort(sortAsc)
      );
    });

    it("should sort a list of numbers of odd length", () => {
      expect(QuickSort.quickSort(oddLengthArray)).toEqual(
        oddLengthArray.slice().sort(sortAsc)
      );
    });

    it("should use a custom comparator", () => {
      expect(QuickSort.quickSort(evenLengthArray, comp)).toEqual(
        evenLengthArray.slice().sort(sortDesc)
      );
    });
  });


});
