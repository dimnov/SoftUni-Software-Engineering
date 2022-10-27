function trippleLetters(num) {
  for (let i = 0; i < num; i++) {
    let first = String.fromCharCode(97 + i);
    for (let j = 0; j < num; j++) {
      let second = String.fromCharCode(97 + j);
      for (let k = 0; k < num; k++) {
        let third = String.fromCharCode(97 + k);
        console.log(`${first}${second}${third}`);
      }
    }
  }
}
trippleLetters(2)