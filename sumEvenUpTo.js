function sumEvenUpTo(n) {
  let i = 2;
  let sum = 0;
  while (i <= n) {
    if (i % 2 == 0) {
      sum += i;
    }
    i++;
  }
  return sum;
}

console.log(sumEvenUpTo(10));
console.log(sumEvenUpTo(15));
console.log(sumEvenUpTo(20));
console.log(sumEvenUpTo(8));
