function pcBuildPeter(input) {
  let budget = Number(input[0]);
  let videoCardQuantity = Number(input[1]);
  let processorQuantity = Number(input[2]);
  let ramQuantity = Number(input[3]);
  let discount = 0;

  let videoCardPrice = 250 * videoCardQuantity;
  let processorPrice = ((0.35 * videoCardPrice) * processorQuantity);
  let ramPrice = ((0.1 * videoCardPrice) * ramQuantity);

  totalPrice = videoCardPrice + processorPrice + ramPrice;

  if (videoCardQuantity > processorQuantity) {
    discount = 0.15 * totalPrice;
  } else {
    discount = 0;
  }

  let totalPriceDiscount = totalPrice - discount;


  if (budget >= totalPriceDiscount) {
    console.log(`You have ${(input[0] - totalPriceDiscount).toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${(totalPriceDiscount - input[0]).toFixed(2)} leva more!`);
  }
}