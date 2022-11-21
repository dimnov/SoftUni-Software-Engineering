function furniture(input) {
  let index = 0;
  const pattern = /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>\d+[\.]*\d+)!(?<quantity>\d+)/g;

  console.log('Bought furniture:');

  let sum = 0;

  while (input[index] !== 'Purchase') {
    let product = input[index];
    let currectProduct = pattern.exec(product);

    while (currectProduct !== null) {
      const productName = currectProduct.groups['name'];
      console.log(productName);

      const productPrice = currectProduct.groups['price'];
      const productQuantity = currectProduct.groups['quantity'];

      sum += productPrice * productQuantity;

      currectProduct = pattern.exec(product);
    }

    index++;
  }
  console.log(`Total money spend: ${sum.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
  '>>TV<<300!5',
  '>Invalid<<!5',
  'Purchase']);