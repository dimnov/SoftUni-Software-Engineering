function chessBoard(x) {
  let currentColor = 'black';
  let previousColor = '';

  console.log('<div class="chessboard">');

  for (let i = 1; i <= x; i++) {
    console.log('  <div>');

    for (let j = 1; j <= x; j++) {
      console.log(`    <span class="${currentColor}"></span>`);

      previousColor = currentColor;
      currentColor = previousColor === 'black' ? 'white' : 'black';
    }
    console.log('  </div>')

    if (x % 2 === 0) {
      previousColor = currentColor;
      currentColor = previousColor === 'black' ? 'white' : 'black';
    }
  }
  console.log('</div>');
}
chessBoard(3)