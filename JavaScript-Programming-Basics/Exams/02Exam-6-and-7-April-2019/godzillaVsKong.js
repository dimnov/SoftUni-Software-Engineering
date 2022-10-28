function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let people = Number(input[1]);
  let priceClothes = Number(input[2]);

  let decorPrice = budget * 0.10;

  if (people > 150) {
    priceClothes -= priceClothes * 0.10;
  }

  let totalPriceClothes = people * priceClothes;
  let moneyDecorAndClothes = decorPrice + totalPriceClothes;
  let result = Math.abs(budget - moneyDecorAndClothes)

  if (moneyDecorAndClothes > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${result.toFixed(2)} leva more.`);
  } else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`);
  }
}

godzillaVsKong(["20000",
  "120",
  "55.5"])
