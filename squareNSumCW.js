function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

console.log(squareSum([0, 2, 3, 4, 5]));
console.log(squareSum([-1, -2]));
console.log(squareSum([0, 3, 4, 5]));
