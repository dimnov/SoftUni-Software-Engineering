function lowestPrices(arr) {
  let object = {};

  for (const el of arr) {
    const [townName, productName, price] = el.split(' | ');

    if (!object[productName]) {
      object[productName] = {};
    }
    object[productName][townName] = Number(price);
  }

  let result = [];

  for (const key in object) {
    let sorted = Object.entries(object[key]).sort((a, b) => a[1] - b[1]);
    let [town, price] = sorted[0];
    result.push(`${key} -> ${price} (${town})`);
  }
  console.log(result.join('\n'));
}
lowestPrices(['Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10']);