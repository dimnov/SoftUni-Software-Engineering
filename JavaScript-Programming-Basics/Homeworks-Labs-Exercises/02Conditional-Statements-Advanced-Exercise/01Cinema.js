function cinema(input) {
  let type = input[0];
  let rows = input[1];
  let columns = input[2];

  let room = rows * columns;
  let price = 0;

  switch (type) {
    case "Premiere":
      price = room * 12;
      break;
    case "Normal":
      price = room * 7.5;
      break;
    case "Discount":
      price = room * 5;
      break;
  }
  console.log(`${price.toFixed(2)} leva `);
}