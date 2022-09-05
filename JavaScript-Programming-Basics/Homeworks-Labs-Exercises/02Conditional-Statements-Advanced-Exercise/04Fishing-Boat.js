function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let countFisherMan = Number(input[2])

  let boatPrice = 0;

  switch (season) {
    case "Spring":
      boatPrice = 3000;
      if (countFisherMan <= 6) {
        boatPrice *= 0.9;
      } else if (countFisherMan >= 7 && countFisherMan <= 11) {
        boatPrice *= 0.85;
      } else if (countFisherMan >= 12) {
        boatPrice *= 0.75;
      } else {
        boatPrice = 3000;
      }
      if (countFisherMan % 2 === 0) {
        boatPrice *= 0.95;
      }
      break;
    case "Summer":
    case "Autumn":
      boatPrice = 4200;
      if (countFisherMan <= 6) {
        boatPrice *= 0.9;
      } else if (countFisherMan >= 7 && countFisherMan <= 11) {
        boatPrice *= 0.85;
      } else if (countFisherMan >= 12) {
        boatPrice *= 0.75;
      } else {
        boatPrice = 4200;
      }
      if (season !== "Autumn") {
        if (countFisherMan % 2 === 0) {
          boatPrice *= 0.95;
        }
      }
      break;
    case "Winter":
      boatPrice = 2600;
      if (countFisherMan <= 6) {
        boatPrice *= 0.9;
      } else if (countFisherMan >= 7 && countFisherMan <= 11) {
        boatPrice *= 0.85;
      } else if (countFisherMan >= 12) {
        boatPrice *= 0.75;
      } else {
        boatPrice = 2600;
      }
      if (countFisherMan % 2 === 0) {
        boatPrice *= 0.95;
      }
      break;
  }
  let total = budget - boatPrice;

  if (budget >= boatPrice) {
    console.log(`Yes! You have ${Math.abs(total).toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${Math.abs(total).toFixed(2)} leva.`);
  }
}