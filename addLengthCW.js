function addLength(str) {
  //start-here
  let volume = str.split(" ");
  const arrFinish = [];
  for (let i = 0; i < volume.length; i++) {
    arrFinish.push(volume[i] + " " + volume[i].length);
  }
  return arrFinish;
}

console.log(addLength("apple ban"));
console.log(addLength("x y z"));
console.log(addLength("xyz"));
