function machine(input) {
  let drink = input[0];
  let sugar = input[1];
  let drinkNum = Number(input[2]);
  let price;

  switch (drink) {
    case "Espresso":
      switch (sugar) {
        case "Without":
          price = 0.9 * drinkNum;
          price *= 0.65;
          if (drinkNum >= 5) {
            price *= 0.75;
          }
          break;
        case "Normal":
          price = 1 * drinkNum;
          if (drinkNum >= 5) {
            price *= 0.75;
          }
          break;
        case "Extra":
          price = 1.2 * drinkNum;
          if (drinkNum >= 5) {
            price *= 0.75;
          }
          break;
      }
      break;
    case "Cappuccino":
      switch (sugar) {
        case "Without":
          price = 1 * drinkNum;
          price *= 0.65;
          break;
        case "Normal":
          price = 1.2 * drinkNum;
          break;
        case "Extra":
          price = 1.6 * drinkNum;
          break;
      }
      break;
    case "Tea":
      switch (sugar) {
        case "Without":
          price = 0.5 * drinkNum;
          price *= 0.65;
          break;
        case "Normal":
          price = 0.6 * drinkNum;
          break;
        case "Extra":
          price = 0.7 * drinkNum;
          break;
      }
      break;
  }
  if (price > 15) {
    price *= 0.8;
  }
  console.log(`You bought ${drinkNum} cups of ${drink} for ${price.toFixed(2)} lv.`);
}
machine(["Tea", "Extra", "3"])
