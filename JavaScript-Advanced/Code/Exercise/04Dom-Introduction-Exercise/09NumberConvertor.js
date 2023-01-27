function solve() {
  const firstOptEl = document.createElement('option');
  const secondOptEl = document.createElement('option');

  firstOptEl.value = 'binary';
  secondOptEl.value = 'hexadecimal';

  firstOptEl.innerHTML = 'Binary';
  secondOptEl.innerHTML = 'Hexadecimal';

  const menu = document.getElementById('selectMenuTo');
  menu.appendChild(firstOptEl);
  menu.appendChild(secondOptEl);

  const button = document.getElementsByTagName('button')[0];

  button.addEventListener('click', function () {
    const input = document.getElementById('input');
    const result = document.getElementById('result');

    if (menu.value === 'binary') {
      result.value = Number(input.value).toString(2);
    } else if (menu.value === 'hexadecimal') {
      result.value = Number(input.value).toString(16).toUpperCase();
    }
  });
}