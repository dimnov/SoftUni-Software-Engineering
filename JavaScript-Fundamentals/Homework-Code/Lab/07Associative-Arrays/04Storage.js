function storage(input) {
  let strg = new Map();

  for (const line of input) {
    let [item, quantity] = line.split(' ');
    quantity = Number(quantity);

    if (strg.has(item)) {
      quantity += strg.get(item);
    }

    strg.set(item, quantity);
  }

  for (const [item, quanity] of strg) {
    console.log(`${item} -> ${quanity}`);
  }
}
storage(['tomatoes 10',
  'coffee 5',
  'olives 100',
  'coffee 40'])