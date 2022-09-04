function time(input) {
  let inputHours = Number(input[0])
  let inputMinutes = Number(input[1]);

  let timeInMinutes = inputHours * 60 + inputMinutes;
  timeInMinutes = timeInMinutes + 15;


  let hours = Math.floor(timeInMinutes / 60);
  let minutes = timeInMinutes % 60;

  if (hours == 24) {
    hours = 0;
  }

  if (minutes < 10) {
    console.log(`${hours}:0${minutes}`);
  } else {
    console.log(`${hours}:${minutes}`);
  }
}