function findNumbersGreaterThanNeighboursSum(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i] + arr[i + 2]) {
      newArr.push(arr[i + 1]);
    }
  }
  return newArr;
}

console.log(findNumbersGreaterThanNeighboursSum([1, 4, 2, 12, 5]));
console.log(findNumbersGreaterThanNeighboursSum([10, 5, 13, 35, 22, 11, 8]));
