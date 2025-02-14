function generateNumbers(n) {
  const arr = new Array(n);
  let index = 1;
  for (let elem of arr) {
    arr[index - 1] = index;
    index++;
  }
  return arr;
}

console.log(generateNumbers(1));
console.log(generateNumbers(10));
console.log(generateNumbers(15));
