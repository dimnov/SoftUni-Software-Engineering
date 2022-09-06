function trekkingMania(input) {
  let index = 0;

  let group = Number(input[index]);
  index++;

  let musala = 0;
  let montBlanc = 0;
  let kilimanjaro = 0;
  let k2 = 0;
  let everest = 0;

  let people = 0;

  for (let i = 0; i < group; i++) {
    let number = Number(input[index]);
    people += number;
    index++;
    if (number <= 5) {
      musala += number;
    } else if (number >= 6 && number <= 12) {
      montBlanc += number;
    } else if (number >= 13 && number <= 25) {
      kilimanjaro += number;
    } else if (number >= 26 && number <= 40) {
      k2 += number;
    } else {
      everest += number;
    }

  }

  let percentMusala = (musala / people) * 100;
  let percentmontBlanc = (montBlanc / people) * 100;
  let percentkilimanjaro = (kilimanjaro / people) * 100;
  let percentk2 = (k2 / people) * 100;
  let percenteverest = (everest / people) * 100;

  console.log(`${percentMusala.toFixed(2)}%`);
  console.log(`${percentmontBlanc.toFixed(2)}%`);
  console.log(`${percentkilimanjaro.toFixed(2)}%`);
  console.log(`${percentk2.toFixed(2)}%`);
  console.log(`${percenteverest.toFixed(2)}%`);
}