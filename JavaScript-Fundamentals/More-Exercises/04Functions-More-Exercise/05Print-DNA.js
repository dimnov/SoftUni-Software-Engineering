function printDNA(num) {
  let str = 'ATCGTTAGGG';
  let sum = 0;

  for (let i = 0; i < num; i++) {
    if (i % 4 === 0) {
      console.log(`**${str[sum % 10]}${str[(sum % 10) + 1]}**`);
    } else if (i % 4 === 1) {
      console.log(`*${str[sum % 10]}--${str[(sum % 10) + 1]}*`);
    } else if (i % 4 === 2) {
      console.log(`${str[sum % 10]}----${str[(sum % 10) + 1]}`);
    } else if (i % 4 === 3) {
      console.log(`*${str[sum % 10]}--${str[(sum % 10) + 1]}*`);
    }
    sum += 2;
  }
}
printDNA(4);