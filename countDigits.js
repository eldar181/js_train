function countDigits(n) {
  let count = 1;
  while (n >= 10) {
    count += 1;
    n /= 10;
  }
  return count;
}

console.log(countDigits(12345));
console.log(countDigits(654321));
console.log(countDigits(6));
