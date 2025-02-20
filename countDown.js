function countDown(n) {
  const arr = [];
  while (n >= 0) {
    arr.push(n);
    n--;
  }

  return arr;
}

console.log(countDown(8));
console.log(countDown(15));
console.log(countDown(1));
