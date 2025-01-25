function rpad(array) {
  if (array.length < 5) {
    array.push(-1);
    return array;
  } else {
    return array;
  }
}
let firstArray = [0, 3, 5, 1, 2, 3];
let secondArray = [0];
console.log(rpad(firstArray));
console.log(rpad(secondArray));
