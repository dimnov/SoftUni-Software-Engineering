function balls(input) {
  let balls = Number(input[0]);

  let redBalls = 0;
  let orangeBalls = 0;
  let yellowBalls = 0;
  let whiteBalls = 0;
  let blackBalls = 0;
  let otherBalls = 0;

  let points = 0;

  for (let i = 1; i <= balls; i++) {
    let ballColor = input[i];

    switch (ballColor) {
      case "red":
        redBalls++;
        points += 5;
        break;
      case "orange":
        orangeBalls++;
        points += 10;
        break;
      case "yellow":
        yellowBalls++;
        points += 15;
        break;
      case "white":
        whiteBalls++;
        points += 20;
        break;
      case "black":
        blackBalls++;
        points /= 2;
        break;
      default:
        otherBalls++;
        break;
    }
  }
  console.log(`Total points: ${Math.floor(points)}`);
  console.log(`Red balls: ${redBalls}`);
  console.log(`Orange balls: ${orangeBalls}`);
  console.log(`Yellow balls: ${yellowBalls}`);
  console.log(`White balls: ${whiteBalls}`);
  console.log(`Other colors picked: ${otherBalls}`);
  console.log(`Divides from black balls: ${blackBalls}`);
}
balls(["10",
  "white",
  "white",
  "ee",
  "red",
  "orange",
  "red",
  "black",
  "black",
  "black",
  "black"])