function bestPlayer(input) {
  let index = 0;
  let maxGoals = 0;
  let bestPlayer;

  while (input[index] !== "END") {
    let playerName = input[index];
    index++;
    let scoredGoals = Number(input[index]);

    if (scoredGoals > maxGoals) {
      maxGoals = scoredGoals;
      bestPlayer = playerName;
    }
    if (maxGoals >= 10) {
      break;
    }
    index++;
  }
  console.log(`${bestPlayer} is the best player!`);
  if (maxGoals >= 3) {
    console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${maxGoals} goals.`);
  }
}
bestPlayer(["Zidane",
  "1",
  "Felipe",
  "2",
  "Johnson",
  "4",
  "END"])