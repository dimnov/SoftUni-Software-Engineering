function factory(library, orders) {
  let result = [];

  for (const { template, parts } of orders) {
    let order = Object.assign({}, template);

    for (let part of parts) {
      let func = library[part];
      order[part] = func;
    }
    result.push(order);
  }
  console.log(result);
  return result;
}
