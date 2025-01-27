let type = +prompt();

let lengthOfType = +prompt();
switch (type) {
  case 1:
    console.log(lengthOfType * 1000);
    break;
  case 2:
    console.log(lengthOfType);
    break;
  case 3:
    console.log(lengthOfType / 10);
    break;
  case 4:
    console.log(lengthOfType / 100);
    break;
  case 5:
    console.log(lengthOfType / 1000);
    break;
}
