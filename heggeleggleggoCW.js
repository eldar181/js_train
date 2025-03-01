function heggeleggleggo(word) {
  return word.replace(/([^aeiou\s])/gi, "$1egg");
}
console.log(heggeleggleggo("hello"));
console.log(heggeleggleggo("eggs"));
console.log(heggeleggleggo("FUN KATA"));
