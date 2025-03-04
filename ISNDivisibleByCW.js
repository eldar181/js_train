function isDivisible(n, ...arr1) {
  //Write your code here
  return arr1.every((a) => n % a === 0);
}

console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4));
console.log(isDivisible(8, 3, 4, 2, 5));

console.log(isDivisible(6, 1, 3));
console.log(isDivisible(12, 2));
console.log(isDivisible(100, 5, 4, 10, 25, 20));
console.log(isDivisible(12, 7));
