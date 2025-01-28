function addIfNotExists(arr, x) {
  if (arr.includes(x)) {
    return arr;
  } else {
    arr.push(x);
    return arr;
  }
}
