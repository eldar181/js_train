"use strict";

const arr = [
  [2, 5, 20],
  [89, -5, -22],
];

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }

  console.log(`Sum of index ${i} = ${sum}`);
}

for (const element of arr) {
  for (const i of element) {
    console.log(i);
  }
}
