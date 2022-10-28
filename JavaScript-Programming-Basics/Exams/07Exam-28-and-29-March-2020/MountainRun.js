function mountainRun(input) {
  let seconds = Number(input[0]);
  let meters = Number(input[1]);
  let secondsPerMeter = Number(input[2]);

  let time = meters * secondsPerMeter;
  let slowing = Math.floor(meters / 50);
  let total = time + (slowing * 30);

  if (total < seconds) {
    console.log(`Yes! The new record is ${total.toFixed(2)} seconds.`);
  } else {
    let record = total - seconds;
    console.log(`No! He was ${record.toFixed(2)} seconds slower.`);
  }
}
mountainRun(["1377",
  "389",
  "3"])