function fishLand(input) {
  let priceMackerel = Number(input[0]);
  let priceSprat = Number(input[1]);
  let kgBonito = Number(input[2]);
  let kgScad = Number(input[3]);
  let kgMussel = Number(input[4]);

  let priceBonito = (priceMackerel * 0.6) + priceMackerel;
  let sumBonito = kgBonito * priceBonito;

  let priceScad = (priceSprat * 0.8) + priceSprat;
  let sumScad = kgScad * priceScad;

  let priceMussel = kgMussel * 7.5;

  let sumTotalPrice = sumBonito + priceMussel + sumScad;

  console.log(sumTotalPrice.toFixed(2));
}