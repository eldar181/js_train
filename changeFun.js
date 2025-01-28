function change(arr, toReplace, replacement) {
  if (arr.includes(toReplace)) {
    const indexReplacement = arr.indexOf(toReplace);
    arr[indexReplacement] = replacement;
    return arr;
  } else {
    return arr;
  }
}

console.log(change([1, 2, 3, 4], 6, 5));
