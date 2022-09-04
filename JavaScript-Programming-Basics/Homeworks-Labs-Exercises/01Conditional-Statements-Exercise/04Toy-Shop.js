function toyShop(input) {
  let vacationPrice = Number(input[0]);
  let puzzles = Number(input[1]);
  let dolls = Number(input[2]);
  let bears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  let countAllToys = puzzles + dolls + bears + minions + trucks;
  let sumPriceToys = (puzzles * 2.6) + (dolls * 3) + (bears * 4.1) + (minions * 8.2) + (trucks * 2);

  if (countAllToys >= 50) {
    sumPriceToys *= 0.75;
  }

  sumPriceToys *= 0.90;

  if (sumPriceToys >= vacationPrice) {
    let profit = sumPriceToys - vacationPrice;
    console.log(`Yes! ${profit.toFixed(2)} lv left.`);
  } else {
    let neededMoney = vacationPrice - sumPriceToys;
    console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
  }
}