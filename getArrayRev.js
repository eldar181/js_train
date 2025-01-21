"use strict";

function getArray(number) {
  const arrayN = [];
  for (let i = number - (number % 3); i >= 0; i -= 3) {
    arrayN.push(i);
  }

  return arrayN;
}

console.log(getArray(9));
console.log(getArray(33));
console.log(getArray(21));
