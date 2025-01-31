function digitalRoot(n) {
  return ((n - 1) % 9) + 1;
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
