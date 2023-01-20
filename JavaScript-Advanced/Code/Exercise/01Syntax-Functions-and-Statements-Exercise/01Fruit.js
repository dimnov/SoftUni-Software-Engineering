function fruit(foodName, weightGr, priceKg) {
  let foodKg = weightGr / 1000;
  let result = foodKg * priceKg;

  console.log(`I need $${result.toFixed(2)} to buy ${foodKg.toFixed(2)} kilograms ${foodName}.`);
}
fruit('apple', 1563, 2.35)