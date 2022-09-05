function newHouse(input) {
  let flowersType = input[0];
  let flowersSum = Number(input[1]);
  let budget = Number(input[2]);

  let price = 0;

  switch (flowersType) {
    case "Roses":
      if (flowersSum > 80) {
        price = 5;
        price *= 0.9;
      } else {
        price = 5;
      }
      break;
    case "Dahlias":
      if (flowersSum > 90) {
        price = 3.8;
        price *= 0.85;
      } else {
        price = 3.8;
      }
      break;
    case "Tulips":
      if (flowersSum > 80) {
        price = 2.8;
        price *= 0.85;
      } else {
        price = 2.8;
      }
      break;
    case "Narcissus":
      if (flowersSum < 120) {
        price = 3;
        price *= 1.15;
      } else {
        price = 3;
      }
      break;
    case "Gladiolus":
      if (flowersSum < 80) {
        price = 2.5;
        price *= 1.2;
      } else {
        price = 2.5;
      }
      break;
  }
  let sumPrice = price * flowersSum;

  let totalTotal = Math.abs(budget - sumPrice);

  if (budget >= sumPrice) {
    console.log(`Hey, you have a great garden with ${flowersSum} ${flowersType} and ${totalTotal.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money, you need ${totalTotal.toFixed(2)} leva more.`);
  }
}