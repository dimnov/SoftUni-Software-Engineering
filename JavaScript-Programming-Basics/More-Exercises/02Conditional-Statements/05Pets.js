function pets(input) {
  let days = Number(input[0]);
  let foodLeftKG = Number(input[1]);
  let dogFoodDayKG = Number(input[2]);
  let catFoodDayKG = Number(input[3]);
  let turtleFoodDayKG = Number(input[4]) / 1000;

  let foodNeededDog = dogFoodDayKG * days;
  let foodNeededCat = catFoodDayKG * days;
  let foodNeededTurtle = turtleFoodDayKG * days;

  let total = foodNeededDog + foodNeededCat + foodNeededTurtle;
  let food;
  if (foodLeftKG >= total) {
    food = foodLeftKG - total;
    console.log(`${Math.floor(food)} kilos of food left.`);
  } else {
    food = total - foodLeftKG;
    console.log(`${Math.ceil(food)} more kilos of food are needed.`);
  }
}
pets([5, 10, 2.1, 0.8, 321])