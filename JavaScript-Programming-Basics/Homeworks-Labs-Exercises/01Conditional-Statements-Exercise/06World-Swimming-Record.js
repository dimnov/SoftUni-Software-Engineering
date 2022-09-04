function worldSwimmingRecord(input) {
  let seconds = Number(input[0]);
  let meters = Number(input[1]);
  let oneMeterSec = Number(input[2]);

  let time = meters * oneMeterSec;
  let slowdown = Math.floor(meters / 15);

  time = time + slowdown * 12.5;

  if (time < seconds) {
    console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
  } else {
    let rec = time - seconds;
    console.log(`No, he failed! He was ${rec.toFixed(2)} seconds slower.`);
  }
}