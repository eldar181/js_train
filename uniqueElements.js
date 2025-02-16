function uniqueElements(arr) {
  let unique = [...new Set(arr)];
  return unique;
}

console.log(uniqueElements([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]));
console.log(uniqueElements([10, 22, 33, 44, 4, 44, 4, 55, 66, 77]));
console.log(uniqueElements([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
