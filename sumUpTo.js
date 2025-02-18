function sumUpTo(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

console.log(sumUpTo(10));
console.log(sumUpTo(15));
console.log(sumUpTo(0));
console.log(sumUpTo(8));
