function matrix(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    let output = '';
    for (let j = 1; j <= num; j++) {
      output += `${num} `;
    }
    arr.push(output);
  }
  console.log(arr.join('\n'));
}
matrix(3)