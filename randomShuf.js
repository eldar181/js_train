"use strict";

const randomShuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const randIndex = Math.trunc(Math.random() * (i + 1));
    const tempt = arr[i];
    arr[i] = arr[randIndex];
    arr[randIndex] = tempt;
  }
};

const myArr = [10, 22, 3, 33, 44, 55, 77, 88, 99, 102, 105, 444];
randomShuffle(myArr);

console.log(myArr);
