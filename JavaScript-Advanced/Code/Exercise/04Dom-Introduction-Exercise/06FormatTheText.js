function solve() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');
  output.innerHTML = '';

  const arrSplit = input.split('.').filter(x => x.length > 0);

  for (let i = 0; i < arrSplit.length; i += 3) {
    const result = [];

    for (let j = 0; j < 3; j++) {
      if (arrSplit[i + j]) {
        result.push(arrSplit[i + j]);
      }
    }
    let resultText = result.join('. ') + '.'.trim();
    output.innerHTML += `<p>${resultText}</p>`;
  }
}