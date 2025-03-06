function isPalindrome(x) {
  // your code here
  return (
    x.toLocaleLowerCase().split("").reverse().join("") === x.toLocaleLowerCase()
  );
}
console.log(isPalindrome("a"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome("heLLo"));
console.log(isPalindrome("aBbA"));
