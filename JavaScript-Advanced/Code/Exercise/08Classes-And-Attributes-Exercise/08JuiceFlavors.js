function juiceFlavors(input) {
  const juices = {};
  const bottles = {};

  for (const element of input) {
    const [juice, quantity] = element.split(' => ');
    let current = {};
    let currentQuantity = Number(quantity);

    if (!Object.values(juices).map(x => x.juice).includes(juice)) {
      current = {
        juice,
        quantity: currentQuantity,
      };
      juices[juice] = current;
    } else {
      current = juices[juice];
      current.quantity += currentQuantity;
    }

    let currentBottles = 0;

    while (current.quantity >= 1000) {
      currentBottles++;
      current.quantity -= 1000;
    }
    if (!Object.values(bottles).map(x => x.juice).includes(juice) && currentBottles !== 0) {
      current = {
        juice,
        bottles: currentBottles,
      };
      bottles[juice] = current;
    } else if (Object.values(bottles).map(x => x.juice).includes(juice)) {
      current = bottles[juice];
      current.bottles += currentBottles;
    }
  }

  for (const juice of Object.entries(bottles)) {
    console.log(`${juice[0]} => ${juice[1].bottles}`);
  }
}

juiceFlavors(['Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549']);