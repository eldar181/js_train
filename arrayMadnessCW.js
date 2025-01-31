function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  let sum = 0;
  let sum1 = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] ** 2;
  }
  for (let i = 0; i < b.length; i++) {
    sum1 += b[i] ** 3;
  }
  return sum > sum1;
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));
console.log(arrayMadness([5, 6, 7], [4, 5, 6]));
console.log(arrayMadness([3, 4, 5], [2, 3, 4]));
console.log(arrayMadness([2, 3, 4], [1, 2, 3]));
