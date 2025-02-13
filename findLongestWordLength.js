function findLongestWordLength(arr) {
  let num = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num.length) {
      num = arr[i];
    }
  }
  return num.length;
}

console.log(findLongestWordLength(["apple", "banana", "cherry"]));
console.log(findLongestWordLength(["int", "number", "string"]));
console.log(findLongestWordLength(["scores", "itog", "typings"]));
