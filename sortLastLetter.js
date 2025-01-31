function sortLastLetter(arr) {
  const sortFn = function (a, b) {
    if (a[a.length - 1] < b[b.length - 1]) return -1;
    if (a[a.length - 1] > b[b.length - 1]) return 1;
    if (a[a.length - 1] == b[b.length - 1]) return 0;
  };
  return arr.sort(sortFn);
}

console.log(sortLastLetter(["banana", "cherry", "date"]));
