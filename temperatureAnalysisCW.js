function lowestTemp(t) {
  return t ? Math.min(...t.split(" ")) : null;
}

console.log(lowestTemp(""));
console.log(lowestTemp("-1 50 -4 20 22 -7 0 10 -8"));
console.log(lowestTemp("18 27 -42 16 17 -43 36 45 -25 -24 19 -14"));
