function findMissing(list) {
  return (
    ((list[0] + list[list.length - 1]) * (list.length + 1)) / 2 -
    list.reduce((a, b) => a + b)
  );
}
console.log(findMissing([1, 3, 5, 9, 11]));
