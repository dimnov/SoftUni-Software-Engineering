function pipesInPool(input) {
  let v = Number(input[0]);
  let p1 = Number(input[1]);
  let p2 = Number(input[2]);
  let h = Number(input[3]);

  let total = p1 * h + p2 * h;

  if (total <= v) {
    let percentFull = (total / v) * 100;
    let percentP1 = (p1 * h / total) * 100;
    let percentP2 = (p2 * h / total) * 100;
    console.log(`The pool is: ${percentFull.toFixed(2)}% full. Pipe 1: ${percentP1.toFixed(2)}%. Pipe 2: ${percentP2.toFixed(2)}%.`);
  } else {
    let diffFullOver = (total - v)
    console.log(`For ${h.toFixed(2)} hours the pool overflows with ${diffFullOver.toFixed(2)} liters.`);
  }
}