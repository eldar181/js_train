function findIndexEqualNumbers(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      newArr.push(i);
    }
  }
  return newArr;
}
console.log(findIndexEqualNumbers([0, -1, 2, -3, 4, -5, 6]));
console.log(findIndexEqualNumbers([0, 1, -2, 3, -4, 5, -6]));
