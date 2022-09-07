function coins(input) {
  let cash = Number(input[0]);
  let money = Math.floor(cash * 100);
  let moneyCounter = 0;

  while (money > 0) {
    moneyCounter++;
    if (money >= 200) {
      money -= 200;
    } else if (money >= 100) {
      money -= 100;
    } else if (money >= 50) {
      money -= 50;
    } else if (money >= 20) {
      money -= 20;
    } else if (money >= 10) {
      money -= 10;
    } else if (money >= 5) {
      money -= 5;
    } else if (money >= 2) {
      money -= 2;
    } else {
      money -= 1;
    }
  }
  console.log(moneyCounter);
}