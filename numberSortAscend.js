function numberSort(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(numberSort([1, 3, 2, 4, 11, 15]));
console.log(numberSort([3, 1, 99, 4, -1, -3]));
console.log(numberSort([90, 55, 33, 22, 11, 10, 0]));
