function lunchBreak(input) {
  let seriesName = input[0];
  let episodeLength = Number(input[1]);
  let breakTime = Number(input[2]);

  let remainingTime = 0;

  let lunchTime = 0.125 * breakTime;
  let restTime = 0.25 * breakTime;

  let totalTime = episodeLength + lunchTime + restTime;

  if (breakTime >= totalTime) {
    remainingTime = breakTime - totalTime;
    console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(remainingTime)} minutes free time.`);
  } else {
    remainingTime = totalTime - breakTime;
    console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(remainingTime)} more minutes.`);
  }
}