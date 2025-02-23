function findNumbersGreaterThanPrevious(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      newArr.push(arr[i + 1]);
    }
  }
  return newArr;
}

console.log(findNumbersGreaterThanPrevious([2, 5, 3, 7, 5, 4, 7]));
console.log(findNumbersGreaterThanPrevious([10, 0, 22, 33, 55, 23, 31, 22]));
