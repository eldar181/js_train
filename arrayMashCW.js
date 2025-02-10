function arrayMash(array1, array2) {
  const arr = [];
  for (let i = 0; i < array1.length; i++) {
    arr.push(array1[i], array2[i]);
  }
  return arr;

  // do the mash
}
console.log(arrayMash([1, 2, 3], ["a", "b", "c"]));
console.log(arrayMash([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"]));
console.log(arrayMash([1, 1, 1, 1], [2, 2, 2, 2]));
