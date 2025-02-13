function digPow(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}
console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));
