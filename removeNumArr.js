function removeAll(arr, n) {
  const newArr = [];
  for (const i of arr) {
    if (i === n) {
      continue;
    } else {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(removeAll([1, 3, 4, 3, 7, 5, 3], 3));
console.log(removeAll([1, 3, 4, 3, 7, 5, 3], 10));
console.log(removeAll([5, 5, 5, 5, 5, 5, 5, 1], 5));
