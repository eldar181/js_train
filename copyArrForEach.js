function copyArr(oldArr) {
  const arr = [];
  for (const i of oldArr) {
    arr.push(i);
  }
  return arr;
}

console.log(copyArr([1, 2, 3, 4, 5]));
console.log(copyArr([1]));
console.log(copyArr([1, 2, 2, 3, 3, 4, 4, 5, 5]));
