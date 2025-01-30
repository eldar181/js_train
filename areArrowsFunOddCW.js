function odds(values) {
  // arrow it
  return values.filter((value) => value % 2 != 0);
}

console.log(odds([]));
console.log(odds([1, 2, 3, 4, 5]));
console.log(odds([3, 5, 7, 9]));
