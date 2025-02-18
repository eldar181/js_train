function bmi(weight, height) {
  let bmi = weight / (height * height);
  switch (true) {
    case bmi <= 18.5:
      return "Underweight";
    case bmi <= 25.0:
      return "Normal";
    case bmi <= 30.0:
      return "Overweight";
    case bmi > 30:
      return "Obese";
  }
}

console.log(bmi(50, 1.8));
console.log(bmi(80, 1.8));
console.log(bmi(90, 1.8));
console.log(bmi(100, 1.8));
