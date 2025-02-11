function compareIntegers(a, b) {
  if (a === b) {
    return "equal";
  }
  return BigInt(a) < BigInt(b) ? "less" : "greater";
}
console.log(compareIntegers("12", "13"));
console.log(compareIntegers("875", "799"));
console.log(compareIntegers("1000", "1000"));
console.log(
  compareIntegers(
    "1000000000000000000000000000000000",
    "1000000000000000000000000000000001"
  )
);
