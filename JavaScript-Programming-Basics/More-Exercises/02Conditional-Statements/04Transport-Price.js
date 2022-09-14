function transportPrice(input) {
  let n = input[0];
  let time = input[1];
  let money;

  if (n >= 20 && n < 100) {
    money = n * 0.09;
    console.log(money.toFixed(2));
  } else if (n >= 100) {
    money = n * 0.06;
    console.log(money.toFixed(2));
  } else {
    if (time === "day") {
      money = (n * 0.79) + 0.70;
      console.log(money.toFixed(2));
    } else {
      money = (n * 0.90) + 0.70;
      console.log(money.toFixed(2));
    }
  }
}
transportPrice([180, "night"])