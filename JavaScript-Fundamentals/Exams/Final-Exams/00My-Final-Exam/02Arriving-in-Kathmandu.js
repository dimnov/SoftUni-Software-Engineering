function arriving(input) {
  let pattern = /^([A-Za-z0-9!@#$?]+)=(\d+)<<(.*)$/;

  let line = input.shift();

  while (line !== 'Last note') {
    let matches = line.match(pattern);

    if (matches) {
      let getNamePattern = /[A-Za-z0-9]+/g;
      let match = matches[1].match(getNamePattern).join('');

      if (matches[3].length === Number(matches[2])) {
        console.log(`Coordinates found! ${match} -> ${matches[3]}`);
      } else {
        console.log('Nothing found!');
      }
    } else {
      console.log('Nothing found!');
    }
    line = input.shift();
  }
}
arriving(["Ka?!#nch@@en@ju##nga@=3<<thfbghvn",
  "=9Cho?@#Oyu<<thvb7ydht",
  "Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6",
  "Dhau??la#gi@ri?!#=3<<bvnfhrtiuy",
  "Last note"]);