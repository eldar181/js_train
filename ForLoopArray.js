"use strict";

const arr = [
  [2, 5, 20],
  [89, -5, "Hello", true],
];
for (let i = 0; i < arr.length; i++) {
  const innerArr = arr[i];
  for (let i = 0; i < innerArr.length; i++) {
    const value = innerArr[i];
    console.log(value);
  }
}
