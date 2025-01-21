"use strict";

function printSquare(line) {
  if (line < 2 || !Number.isInteger(line)) {
    return;
  }
  let squareLine = "";
  for (let r = 0; r < line; r++) {
    for (let columns = 0; columns < line; columns++) {
      if (r === 0 || r == line - 1 || columns === 0 || columns === line - 1) {
        squareLine += "# ";
      } else {
        squareLine += "  ";
      }
    }
    squareLine = squareLine.trim();
    squareLine += "\n";
  }
  console.log(squareLine);
}

printSquare(10);
