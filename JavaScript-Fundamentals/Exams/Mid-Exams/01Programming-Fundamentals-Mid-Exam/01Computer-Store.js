function computerStore(arr) {
  let customer = arr.pop();
  let array = arr.map(Number);
  let sum = 0;

  let arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] < 0) {
      sum += 0;
      console.log(`Invalid price!`);
    } else {
      sum += array[i];
    }
  }

  if (sum <= 0) {
    console.log(`Invalid order!`);
  } else {
    let taxes = (sum / array.length) * 1.2;
    let total = sum + taxes;
    if (customer === 'special') {
      total *= 0.9;
    }
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${sum.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${total.toFixed(2)}$`);
  }
}
computerStore([
  '1050',
  '200',
  '450',
  '2',
  '18.50',
  '16.86',
  'special']);