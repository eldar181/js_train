function numberSort(arr, ascending) {
  if (ascending === true) {
    return arr.sort((a, b) => a - b);
  } else {
    return arr.sort((a, b) => b - a);
  }
}

console.log(numberSort([1, 4, 0, 9], true));
console.log(numberSort([1, 4, 0, 9], false));
