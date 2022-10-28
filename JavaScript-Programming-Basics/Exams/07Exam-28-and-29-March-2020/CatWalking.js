function catWalking(input) {
  let minutesWalk = Number(input[0]);
  let walksAveryDay = Number(input[1]);
  let caloriesEaten = Number(input[2]);

  let minutesPerDay = minutesWalk * walksAveryDay;

  let caloriesBurn = minutesPerDay * 5;
  let caloriesNeededToBurn = caloriesEaten * 0.5;

  if (caloriesBurn >= caloriesNeededToBurn) {
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurn}.`);
  } else {
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurn}.`);
  }
}
catWalking(["15",
  "2",
  "500"])