function solve(input) {
  if (input[0] == "square") {
    console.log((input[1] * input[1]).toFixed(3));
  } else if (input[0] == "rectangle") {
    console.log((input[1] * input[2]).toFixed(3));
  } else if (input[0] == "circle") {
    console.log(((input[1] * input[1]) * Math.PI).toFixed(3));
  } else if (input[0] == "triangle") {
    console.log(((input[1] * input[2]) / 2).toFixed(3));
  }
}