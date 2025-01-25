function getLast(array) {
  if (array.length == 0) {
    return -1;
  } else {
    return array[array.length - 1];
  }
}
console.log(getLast([]));
console.log(getLast([3, 4, 1, 2, 22, 55]));
console.log(getLast([3]));
console.log(getLast([3, 9]));
