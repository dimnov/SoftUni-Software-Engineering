function radioCrystals(arr) {
  let thickness = arr[0];
  let arrLength = arr.length;

  for (let i = 1; i < arrLength; i++) {
    let current = arr[i];

    console.log(`Processing chunk ${current} microns`);

    let cut = (num) => num / 4;
    let lap = (num) => num - (num * 0.2);
    let grind = (num) => num - 20;
    let etch = (num) => num - 2;
    let xray = (num) => num + 1;

    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;

    while (current !== thickness) {
      while ((current / 4) >= thickness) {
        current = cut(current);
        cutCount++;
      }

      if (cutCount > 0) {
        console.log(`Cut x${cutCount}`);
        console.log(`Transporting and washing`);
        current = Math.floor(current);
      }

      while (current - (current * 0.2) >= thickness) {
        current = lap(current);
        lapCount++;
      }

      if (lapCount > 0) {
        console.log(`Lap x${lapCount}`);
        console.log(`Transporting and washing`);
        current = Math.floor(current);
      }

      while (current - 20 >= thickness) {
        current = grind(current);
        grindCount++;
      }

      if (grindCount > 0) {
        console.log(`Grind x${grindCount}`);
        console.log(`Transporting and washing`);
        current = Math.floor(current);
      }

      while (current - 2 >= thickness - 1) {
        current = etch(current);
        etchCount++;
      }

      if (etchCount > 0) {
        console.log(`Etch x${etchCount}`);
        console.log(`Transporting and washing`);
        current = Math.floor(current);
      }

      if (current < thickness) {
        current = xray(current);
        console.log(`X-ray x1`);
      }
    }
    console.log(`Finished crystal ${thickness} microns`);
  }
}
radioCrystals([1375, 50000]);