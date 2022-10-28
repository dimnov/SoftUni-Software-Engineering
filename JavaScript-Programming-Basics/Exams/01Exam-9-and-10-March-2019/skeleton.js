function skeleton(input) {
  let minutes = Number(input[0]);
  let seconds = Number(input[1]);
  let meters = Number(input[2]);
  let seconds100m = Number(input[3]);

  let secs = (minutes * 60) + seconds;
  let slow = meters / 120;
  let slowTime = slow * 2.5;

  let time = (meters / 100) * seconds100m - slowTime;

  if (time <= secs) {
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${time.toFixed(3)}.`);
  } else {
    console.log(`No, Marin failed! He was ${(time - secs).toFixed(3)} second slower.`);
  }
}
skeleton(["2",
  "12",
  "1200",
  "10"])