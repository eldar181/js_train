function countNegativeNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sum += 1;
    }
  }
  return sum;
}
console.log(countNegativeNumbers([1, -2, 3, -4, 5, -6]));
console.log(countNegativeNumbers([1, -2, 3, -4, 5, -5, -3]));
console.log(countNegativeNumbers([-1, -2, 3, -4, 5, -5, -3]));
