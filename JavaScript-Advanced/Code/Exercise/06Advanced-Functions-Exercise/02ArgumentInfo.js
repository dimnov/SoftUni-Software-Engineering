function argumentInfo(...input) {
  let count = {};
  let sorted;

  input.forEach(element => {
    const type = typeof element;
    console.log(`${type}: ${element}`);

    if (!count[type]) count[type] = 1;
    else count[type] += 1;

    sorted = Object.keys(count).sort((a, b) => count[b] - count[a]);
  });

  for (const element of sorted) {
    console.log(`${element} = ${count[element]}`);
  }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });