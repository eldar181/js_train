"use strict";

function getNearestToMax(arr) {
 
  const maxNumber = Math.max(...arr);
  const res = [];
  for (const val of arr) {
    if (val >= maxNumber * 0.9 && val !== maxNumber) {
      res.push(val);
    }
  }

  return res;
}

console.log(getNearestToMax([10, 14, 21, 25, 27, 29, 25, 23, 16, 22, 17]));
console.log(getNearestToMax([-4, -1, 90, 33, 55, 77, 88, 97, 85]));
