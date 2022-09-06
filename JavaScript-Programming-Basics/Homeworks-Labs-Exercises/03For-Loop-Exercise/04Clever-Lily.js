function cleverLily(input) {
  let age = Number(input[0]);
  let laundry = Number(input[1]);
  let toyPrice = Number(input[2]);

  let money = 0;
  let moneyTotal = 10;
  let toysCount = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      money += moneyTotal;
      moneyTotal += 10;
      money--;
    } else {
      toysCount++;
    }
  }

  money += toysCount * toyPrice;

  let total = Math.abs(laundry - money);

  if (money >= laundry) {
    console.log(`Yes! ${total.toFixed(2)}`);
  } else {
    console.log(`No! ${total.toFixed(2)}`);
  }
}