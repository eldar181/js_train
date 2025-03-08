function mergeArrays(a, b) {
  // your code here
  const mergedArr = a.concat(b);
  let uniqueArr = [...new Set(mergedArr)];

  uniqueArr.sort((a, b) => a - b);
  return uniqueArr;
}

console.log(mergeArrays([1, 10, 11, 12, 13, 14, 15], [2, 3, 4, 5, 6, 7, 8, 9]));
