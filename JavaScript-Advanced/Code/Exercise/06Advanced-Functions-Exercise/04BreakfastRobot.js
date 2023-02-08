function solution() {
  const library = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  }

  const sortedElements = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  }

  function manager(str) {
    let [command, action, quantity] = str.split(' ');
    quantity = Number(quantity);

    if (command === 'restock') {
      sortedElements[action] += quantity;
      return 'Success';
    } else if (command === 'prepare') {
      const recipe = library[action];

      for (const element in recipe) {
        if (recipe[element] * quantity > sortedElements[element]) {
          return `Error: not enough ${element} in stock`;
        }
        sortedElements[element] -= recipe[element] * quantity;
      }
      return 'Success';
    } else if (command === 'report') {
      const report = [];

      for (const element in sortedElements) {
        report.push(`${element}=${sortedElements[element]}`);
      }
      return report.join(' ');
    }

  }
  return manager;
}

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));