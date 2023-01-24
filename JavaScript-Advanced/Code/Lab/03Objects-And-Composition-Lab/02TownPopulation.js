function townPopulation(arr) {
  const result = {};

  for (const el of arr) {
    let [name, population] = el.split(' <-> ');

    if (name in result) {
      result[name] += Number(population);
    } else {
      result[name] = Number(population);
    }
  }

  for (const name in result) {
    console.log(`${name} : ${result[name]}`);
  }
}
townPopulation(['Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000']);