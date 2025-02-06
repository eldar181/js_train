function sumOfSquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }
  return sum;
}
console.log(sumOfSquares([1, 3, 4, 3]));
console.log(sumOfSquares([1, 2, 3]));
console.log(sumOfSquares([1, 2, 3, 4]));
