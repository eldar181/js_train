"use strict";

const arrayReverse = (arr) => {
  const arrRev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrRev.push(arr[i]);
  }
  return arrRev;
};

console.log(arrayReverse([100]));
console.log(arrayReverse([101, 102, 103, 104, 105, 106, 107]));
