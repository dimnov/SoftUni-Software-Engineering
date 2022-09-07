function library(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);

  let cake = x * y;
  let pieces = 0;
  let index = 2;
  let command = input[index];

  while (command !== "STOP") {
    let piecesEaten = Number(command);
    pieces += piecesEaten;

    if (cake <= pieces) {
      console.log(`No more cake left! You need ${pieces - cake} pieces more.`);
      break;
    }
    index++;
    command = input[index];
  }
  if (command === "STOP") {
    console.log(`${cake - pieces} pieces are left.`);
  }
}