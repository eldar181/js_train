function oddCount(n) {
  // your code here
  let a = 1;
  let sum = 0;
  while (a < n) {
    if (a % 2 != 0) {
      sum += 1;
    }
    a++;
  }
  return sum;
}
