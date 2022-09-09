function vegetableMarket(input) {
  let priceKgVegetables = Number(input[0]);
  let priceKgFruits = Number(input[1]);
  let totalKgVegetables = Number(input[2]);
  let totalKgFruits = Number(input[3]);

  let totalPriceVegetables = priceKgVegetables * totalKgVegetables;
  let totalPriceFruits = priceKgFruits * totalKgFruits;
  let totalPrice = totalPriceFruits + totalPriceVegetables;
  let totalPriceInEuro = totalPrice / 1.94;
  console.log(totalPriceInEuro.toFixed(2));
}