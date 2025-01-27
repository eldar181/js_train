function switchFirstAndLast(array) {
  if (array.length < 1) {
    return array;
  } else if (array.length == 2) {
    const emptyArray = new Array();
    const first = array.pop();
    const last = array.shift();
    emptyArray.unshift(first);
    emptyArray.push(last);

    return emptyArray;
  } else {
    const first = array.pop();
    const last = array.shift();
    array.unshift(first);
    array.push(last);
    return array;
  }
}

console.log(switchFirstAndLast([]));
console.log(switchFirstAndLast([1, 2, 3, 4, 5]));
console.log(switchFirstAndLast([33, 55]));
