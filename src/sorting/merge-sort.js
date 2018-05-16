module.exports = {
  mergeSortRecursion: mergeSortRecursion
};

function mergeSortRecursion(arr, comp) {
  if (arr.length <= 1) {
    return arr;
  }
  comp = comp ? comp : (a, b) => a < b;

  let mid = Math.floor(arr.length / 2);
  let l = mergeSortRecursion(arr.slice(0, mid), comp);
  let r = mergeSortRecursion(arr.slice(mid), comp);

  let li = 0;
  let ri = 0;
  let result = [];

  while (li < l.length && ri < r.length) {
    result.push(comp(l[li], r[ri]) ? l[li++] : r[ri++]);
  }

  return result.concat(l.slice(li)).concat(r.slice(ri));
}
