function countAll(arr, n) {
  let sum = 0;
  for (const i of arr) {
    if (i === n) {
      sum += 1;
    }
  }
  return sum;
}

console.log(countAll([1, 2, 3, 44, 1, 4, 2, 1, 5, 78], 1));
console.log(countAll([1, 2, 3, 44, 1, 4, 2, 1, 5, 78], 5));
console.log(countAll([1, 2, 3, 44, 1, 4, 2, 1, 5, 78], 2));
console.log(countAll([1, 2, 3, 44, 1, 4, 2, 1, 5, 78], 45));
