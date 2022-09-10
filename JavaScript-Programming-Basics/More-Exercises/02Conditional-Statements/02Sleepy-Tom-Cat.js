function sleepyTom(input) {
  let restDays = Number(input);

  let playMin = restDays * 127;
  let workingDays = 365 - restDays;
  let working = workingDays * 63;

  let total = working + playMin;
  let freeTime = Math.abs(total - 30000);

  let hour = freeTime / 60;
  let min = freeTime % 60;

  if (30000 > total) {
    console.log(`Tom sleeps well`);
    console.log(`${Math.floor(hour)} hours and ${Math.floor(min)} minutes less for play`);
  } else {
    console.log(`Tom will run away`);
    console.log(`${Math.floor(hour)} hours and ${Math.floor(min)} minutes more for play`);
  }
}
sleepyTom(["113"])