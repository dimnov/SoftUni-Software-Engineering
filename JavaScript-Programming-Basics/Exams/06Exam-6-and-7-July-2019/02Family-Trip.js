function trip(input) {
  let budget = Number(input[0]);
  let nights = Number(input[1]);
  let nightPrice = Number(input[2]);
  let additionalCostsPercent = Number(input[3]);

  let totalNightPrice = nights * nightPrice;

  if (nights > 7) {
    totalNightPrice *= 0.95;
  }

  let totalAdditionalCosts = budget * (additionalCostsPercent / 100);
  let total = totalNightPrice + totalAdditionalCosts;
  let sum = budget - total;

  if (total <= budget) {
    console.log(`Ivanovi will be left with ${sum.toFixed(2)} leva after vacation.`);
  } else {
    console.log(`${Math.abs(sum).toFixed(2)} leva needed.`);
  }
}
trip([500, 7, 66, 15
])