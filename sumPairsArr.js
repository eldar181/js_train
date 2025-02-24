function sumPairs(arr) {
  const newArr = [];
  if (arr.length % 2 != 0) {
    for (let i = 0; i < arr.length - 1; i += 2) {
      newArr.push(arr[i] + arr[i + 1]);
    }
  } else {
    for (let i = 0; i < arr.length; i += 2) {
      newArr.push(arr[i] + arr[i + 1]);
    }
  }
  return newArr;
}
console.log(sumPairs([1, 4, 3, 6, 2, 5, 4]));
console.log(sumPairs([1, 4, 3, 6, 2, 5, 4, 6]));
