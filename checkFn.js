function check(arr, value, index) {
  const indexSearched = arr.indexOf(value);
  if (indexSearched == index) {
    return true;
  } else {
    return false;
  }
}

console.log(check([1, 2, 3, 4], 6, 2));
