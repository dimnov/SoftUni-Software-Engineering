function tennis(input) {
  let index = 0;

  let tournaments = Number(input[index]);
  index++;
  let points = Number(input[index]);
  index++;

  let currentPoint = 0;
  let winCounter = 0;

  for (let i = 0; i < tournaments; i++) {
    let result = input[index];
    index++;

    switch (result) {
      case "W":
        winCounter++;
        currentPoint += 2000;
        break;

      case "F":
        currentPoint += 1200;

        break;

      case "SF":
        currentPoint += 720;

        break;
    }
  }

  let finalPoints = points + currentPoint;
  let avgPoints = Math.floor(currentPoint / tournaments);
  let percent = winCounter / tournaments * 100;

  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${avgPoints}`);
  console.log(percent.toFixed(2) + "%");
}