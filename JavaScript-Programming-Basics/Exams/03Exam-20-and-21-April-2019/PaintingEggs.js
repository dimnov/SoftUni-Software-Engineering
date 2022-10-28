function paintingEggs(input) {
  let size = input[0];
  let color = input[1];
  let number = Number(input[2]);

  let price = 0;

  switch (color) {
    case "Red":
      if (size === "Large") {
        price = 16;
      } else if (size === "Medium") {
        price = 13;
      } else {
        price = 9;
      }
      break;
    case "Green":
      if (size === "Large") {
        price = 12;
      } else if (size === "Medium") {
        price = 9;
      } else {
        price = 8;
      }
      break;
    case "Yellow":
      if (size === "Large") {
        price = 9;
      } else if (size === "Medium") {
        price = 7;
      } else {
        price = 5;
      }
      break;
  }
  let total = price * number;
  let totalPrice = total * 0.65;
  console.log(`${totalPrice.toFixed(2)} leva.`);
}
paintingEggs(["Medium",

  "Green",

  "5"])