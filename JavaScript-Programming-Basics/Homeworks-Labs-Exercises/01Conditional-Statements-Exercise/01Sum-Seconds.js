function solve(input) {
  timeFirst = Number(input[0]);
  timeSecond = Number(input[1]);
  timeThird = Number(input[2]);

  let total = timeFirst + timeSecond + timeThird;

  let sumMinutes = Math.floor(total / 60);
  let sumSeconds = total % 60;

  if (sumSeconds < 10) {
    console.log(`${sumMinutes}:0${sumSeconds}`);
  } else {
    console.log(`${sumMinutes}:${sumSeconds}`);
  }
}