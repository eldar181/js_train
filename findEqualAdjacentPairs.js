function findEqualAdjacentPairs(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(findEqualAdjacentPairs([1, 4, 3, 3, 5, 2, 4, 4, 1, 1, 23]));
