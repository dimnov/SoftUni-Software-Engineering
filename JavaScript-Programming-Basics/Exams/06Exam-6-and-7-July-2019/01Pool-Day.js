function poolDay(input) {
  let people = Number(input[0]);
  let fee = Number(input[1]);
  let loungerPrice = Number(input[2]);
  let umbrellaPrice = Number(input[3]);

  let totalFee = people * fee;
  let totalLounger = Math.ceil(people * 0.75);
  let totalLounderPrice = totalLounger * loungerPrice;
  let totalUmbrella = Math.ceil(people / 2);
  let totalUmbrellaPrice = totalUmbrella * umbrellaPrice;

  let total = totalFee + totalLounderPrice + totalUmbrellaPrice;
  console.log(`${total.toFixed(2)} lv.`);
}
poolDay([50, 6, 8, 4])