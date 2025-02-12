function monkeyCount(n) {
  // your code here
  const sumMonkeys = [];
  for (let i = 1; i <= n; i++) {
    sumMonkeys.push(i);
  }
  return sumMonkeys;
}
console.log(monkeyCount(5));
console.log(monkeyCount(3));
console.log(monkeyCount(9));
console.log(monkeyCount(10));
console.log(monkeyCount(20));
