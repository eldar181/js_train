"use strict";

function fillArrayWithZero(arr, length) {
  for (let i = arr.length; i < length; i++) {
    arr.push(0);
  }
}

const array1 = [10, 4, 1, 77];
fillArrayWithZero(array1, 7);
console.log(array1);

const array2 = [1, 3, 2, 5, 90, 88];
fillArrayWithZero(array2, 1);
console.log(array2);
