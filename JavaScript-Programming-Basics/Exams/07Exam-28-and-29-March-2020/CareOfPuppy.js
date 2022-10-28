function CareOfPuppy(input) {
  let index = 1;

  let food = Number(input[0]) * 1000;
  let dailyFood = input[index];
  index++;

  let grams = 0;

  while (dailyFood !== "Adopted") {
    grams += Number(dailyFood);
    dailyFood = input[index];
    index++;

  }

  if (grams <= food) {
    console.log(`Food is enough! Leftovers: ${food - grams} grams.`);
  } else {
    console.log(`Food is not enough. You need ${grams - food} grams more.`);
  }
}
CareOfPuppy(["2",

  "999",

  "456",

  "999",

  "999",

  "123", "456", "Adopted"])