function copy(arr) {
  const arr1 = [];
  for (let i = 0; i < arr.length; i += 1) {
    arr1[i] = arr[i];
  }
  return arr1;
}

console.log(copy([1, 2, 3]));
console.log(copy([33, 44, 55, 77]));
