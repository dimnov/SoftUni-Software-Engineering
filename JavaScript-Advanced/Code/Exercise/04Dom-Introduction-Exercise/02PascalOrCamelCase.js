function solve() {
  const input = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  const toPascal = text => text
    .split(' ')
    .map((w) => w[0]
      .toUpperCase() + w.slice(1)
        .toLowerCase())
    .join('');

  const toCamelCase = text => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1);
  }

  switch (convention) {
    case 'Pascal Case':
      result.textContent = toPascal(input);
      break;
    case 'Camel Case':
      result.textContent = toCamelCase(input);
      break;
    default:
      result.textContent = 'Error!';
      break;
  }

}