const switchFirstAndLast = (arr) => {
  const first = arr[0];
  if (arr.length >= 1) {
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = first;
  }

  return arr;
};

console.log(switchFirstAndLast([1, 2, 3, 4, 5]));
console.log(switchFirstAndLast([1, 2]));
console.log(switchFirstAndLast([5]));
