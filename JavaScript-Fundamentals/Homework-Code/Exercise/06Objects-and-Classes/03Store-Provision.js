function storeProvision(available, delivery) {

  const storage = {};
  const availableLength = available.length;
  const deliveryLength = delivery.length;

  for (let i = 0; i < availableLength; i += 2) {
    const current = available[i];
    storage[current] = Number(available[i + 1]);
  }

  for (let i = 0; i < deliveryLength; i += 2) {
    const current = delivery[i];

    if (!storage.hasOwnProperty(current)) {
      storage[current] = 0;
    }
    storage[current] += Number(delivery[i + 1]);
  }

  for (const product in storage) {
    console.log(`${product} -> ${storage[product]}`);
  }
}
storeProvision([
  'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
  [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
  ]);