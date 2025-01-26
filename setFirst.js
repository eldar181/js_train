function setFirst(array, num) {
  const emptyArray = new Array();
  for (let i = 0; i < array.length; i++) {
    emptyArray.push(array[i]);
  }
  emptyArray.unshift(num);
  return emptyArray;
}
const a = [1, 2, 3, 4, 5];
let b = 10;

console.log(setFirst(a, b));
console.log(setFirst([0, 1], 3));
console.log(setFirst([], 100));
