function evil(n) {
  let bin1 = Number(n).toString(2).split("");
  let onw = 0;
  for (let i = 0; i < bin1.length; i++) {
    if (bin1[i] === "1") {
      onw++;
    }
  }
  if (onw % 2 === 0) {
    return `It\'s Evil!`;
  } else return `It\'s Odious!`;
}
console.log(evil(1));
console.log(evil(2));
console.log(evil(3));
