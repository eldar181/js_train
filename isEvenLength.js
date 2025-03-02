function isEvenLength(str) {
  if (str.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEvenLength("Hi"));
console.log(isEvenLength("Good day!"));
