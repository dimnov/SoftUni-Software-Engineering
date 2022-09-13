function harvest(input) {
  let vineyard = Number(input[0]);
  let grapes = Number(input[1]);
  let litersNeeded = Number(input[2]);
  let workers = Number(input[3]);

  let totalGrape = vineyard * grapes;
  let wine = (totalGrape / 2.5) * 0.4;

  let remains;

  if (wine >= litersNeeded) {
    remains = wine - litersNeeded;
    let perWorker = remains / workers;
    console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
    console.log(`${Math.ceil(remains)} liters left -> ${Math.ceil(perWorker)} liters per person.`);
  } else {
    remains = litersNeeded - wine;
    console.log(`It will be a tough winter! More ${Math.floor(remains)} liters wine needed.`);
  }
}
harvest([650, 2, 175, 3])