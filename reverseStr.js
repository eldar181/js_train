const reverse = (str) => {
  let i = 0;

  let result = "";
  while (i < str.length) {
    result = `${str[i]}${result}`;

    i = i + 1;
  }

  return result;
};

console.log(reverse("Mark"));
console.log(reverse("Welcome"));
console.log(reverse("Summer"));
