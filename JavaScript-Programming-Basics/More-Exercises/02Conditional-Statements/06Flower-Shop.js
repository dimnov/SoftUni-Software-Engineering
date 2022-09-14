function flowerShop(input) {
  let magnolias = Number(input[0]);
  let hyacinths = Number(input[1]);
  let roses = Number(input[2]);
  let cactus = Number(input[3]);
  let giftPrice = Number(input[4]);

  let magnoliasTotalPrice = magnolias * 3.25;
  let hyacinthsTotalPrice = hyacinths * 4;
  let rosesTotalPrice = roses * 3.50;
  let cactusTotalPrice = cactus * 8;

  let total = (magnoliasTotalPrice + hyacinthsTotalPrice + rosesTotalPrice + cactusTotalPrice) * 0.95;
  let money;
  if (total >= giftPrice) {
    money = total - giftPrice;
    console.log(`She is left with ${Math.floor(money)} leva.`);
  } else {
    money = giftPrice - total;
    console.log(`She will have to borrow ${Math.ceil(money)} leva.`);
  }
}
flowerShop([15, 7, 5, 10, 100])