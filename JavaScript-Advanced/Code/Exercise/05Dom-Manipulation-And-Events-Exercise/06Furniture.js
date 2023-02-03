function solve() {
  const [generateBtn, BuyBtn] = document.querySelectorAll('button');

  generateBtn.addEventListener('click', generate);
  BuyBtn.addEventListener('click', buy);

  function generate() {
    const input = JSON.parse(document.querySelector('textarea').value);
    input.forEach(element => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const img = document.createElement('img');
      img.src = element.img;
      td1.appendChild(img);
      tr.appendChild(td1);

      const p1 = document.createElement('p');
      const td2 = document.createElement('td');
      p1.textContent = element.name;
      td2.appendChild(p1);
      tr.appendChild(td2);

      const p2 = document.createElement('p');
      const td3 = document.createElement('td');
      p2.textContent = Number(element.price);
      td3.appendChild(p2);
      tr.appendChild(td3);

      const p3 = document.createElement('p');
      const td4 = document.createElement('td');
      p3.textContent = Number(element.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);

      const td5 = document.createElement('td');
      const input = document.createElement('input');
      input.type = 'checkbox';
      td5.appendChild(input);
      tr.appendChild(td5);

      document.querySelector('tbody').appendChild(tr);
    });
  }

  function buy() {
    const checkBoxes = Array.from(document.querySelectorAll('tbody input:checked'));
    const bought = [];
    let price = 0;
    let decoration = 0;
    const output = document.querySelector('textarea:last-of-type');

    for (const element of checkBoxes) {
      const parent = element.parentElement.parentElement;
      const data = Array.from(parent.querySelectorAll('p'));
      bought.push(data[0].textContent);
      price += Number(data[1].textContent);
      decoration += Number(data[2].textContent);
    }
    output.value += `Bought furniture: ${bought.join(', ')}\r\n`;
    output.value += `Total price: ${price.toFixed(2)}\r\n`;
    output.value += `Average decoration factor: ${decoration / checkBoxes.length}`;
  }
}