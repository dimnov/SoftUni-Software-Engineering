function fuelTank(input) {
  let fuel = input[0];
  let fuelLiter = Number(input[1]);
  let card = input[2];
  let price;

  if (card === "Yes") {
    switch (fuel) {
      case "Gas":
        price = 0.85 * fuelLiter;
        if (fuelLiter >= 20 && fuelLiter <= 25) {
          price *= 0.92;
        } else if (fuelLiter > 25) {
          price *= 0.90;
        } else {
          price;
        }
        break;
      case "Gasoline":
        price = 2.04 * fuelLiter;
        if (fuelLiter >= 20 && fuelLiter <= 25) {
          price *= 0.92;
        } else if (fuelLiter > 25) {
          price *= 0.90;
        } else {
          price;
        }
        break;
      case "Diesel":
        price = 2.21 * fuelLiter;
        if (fuelLiter >= 20 && fuelLiter <= 25) {
          price *= 0.92;
        } else if (fuelLiter > 25) {
          price *= 0.90;
        } else {
          price;
        }
        break;
    }
  } else {
    switch (fuel) {
      case "Gas":
        price = 0.93 * fuelLiter;
        if (fuelLiter >= 20 && fuelLiter <= 25) {
          price *= 0.92;
        } else if (fuelLiter > 25) {
          price *= 0.90;
        } else {
          price;
        }
        break;
      case "Gasoline":
        price = 2.22 * fuelLiter;
        if (fuelLiter >= 20 && fuelLiter <= 25) {
          price *= 0.92;
        } else if (fuelLiter > 25) {
          price *= 0.90;
        } else {
          price;
        }
        break;
      case "Diesel":
        price = 2.33 * fuelLiter;
        if (fuelLiter >= 20 && fuelLiter <= 25) {
          price *= 0.92;
        } else if (fuelLiter > 25) {
          price *= 0.90;
        } else {
          price;
        }
        break;
    }
  }
  console.log(`${price.toFixed(2)} lv.`);
}
fuelTank(["Gas", 30, "Yes"])