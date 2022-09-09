function trainingLab(input) {
  let h = Number(input[0]);
  let w = Number(input[1]);

  let hMeter = h * 100;
  let wMeter = (w * 100) - 100;

  let rows = Math.floor(wMeter / 70);
  let columns = Math.floor(hMeter / 120);
  let total = (rows * columns) - 3;

  console.log(total);
}