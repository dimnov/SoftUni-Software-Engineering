function storeCatalogue(arr) {
  const catalogue = {};

  for (const line of arr) {
    const [productName, price] = line.split(' : ');
    const firstLetter = productName[0];

    if (!catalogue.hasOwnProperty(firstLetter)) {
      catalogue[firstLetter] = {};
    }
    catalogue[firstLetter][productName] = price;
  }

  const sorted = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

  for (const letter of sorted) {
    console.log(letter);

    const sortedProducts = Object.keys(catalogue[letter]).sort((a, b) => a.localeCompare(b));
    for (const product of sortedProducts) {
      console.log(`  ${product}: ${catalogue[letter][product]}`);
    }
  }
}
storeCatalogue(['Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10']);