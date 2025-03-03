function isInternationalPhone(str) {
  return str[0] === "+";
}

console.log(isInternationalPhone("89602223423"));
console.log(isInternationalPhone("+79602223423"));
