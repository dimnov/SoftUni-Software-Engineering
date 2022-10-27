function GladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let brokenShields = 0;
  let expenses = 0;

  for (let i = 1; i <= lostFightsCount; i++) {
    if (i % 2 === 0) {
      expenses += helmetPrice;
    }
    if (i % 3 === 0) {
      expenses += swordPrice;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      expenses += shieldPrice;
      brokenShields++;
      if (brokenShields % 2 === 0) {
        expenses += armorPrice;
      }
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
GladiatorExpenses(23, 12.50, 21.50, 40, 200)