function sumDigits(n) {
  let sum = 0;
  let b = n,
    v;

  while (b) {
    v = b % 10;
    sum += v;
    b = (b - v) / 10;
  }

  return sum;
}
console.log(sumDigits(4352));
console.log(sumDigits(10));
console.log(sumDigits(22));
console.log(sumDigits(0));
