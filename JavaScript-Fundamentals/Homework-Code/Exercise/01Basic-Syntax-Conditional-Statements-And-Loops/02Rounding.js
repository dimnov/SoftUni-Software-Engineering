function rounding(num1, num2) {
  if (num2 > 15) {
    console.log(parseFloat(num1.toFixed(15)));
  } else {
    console.log(parseFloat(num1.toFixed(num2)));
  }
}
rounding(10.5, 3)