import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const cardTemplate = (data) => html`<li>
<img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
<div class="info">
    <button class="showBtn" @click=${onClick} >Show status code</button>
    <div class="status" style="display: none" id=${data.id}>
        <h4 class="card-title">Status Code: ${data.statusCode}</h4>
        <p class="card-text">${data.statusMessage}</p>
    </div>
</div>
</li>`;

const ulTemplate = (data) => html`
<ul>${data.map(cat => cardTemplate(cat))}</ul>`;

const renderCatsComponent = (data) => {
  render(ulTemplate(data), document.getElementById('allCats'))
}
renderCatsComponent(cats);

function onClick(event) {
  event.preventDefault();
  const cat = event.target.parentNode;
  const result = cat.querySelector('.status');
  const showBtn = cat.querySelector('.showBtn');

  // if (result.style.display === 'block') {
  //   showBtn.textContent = 'Show status code';
  //   result.style.display = 'none';
  // } else {
  //   showBtn.textContent = 'Hide status code';
  //   result.style.display = 'block';
  // }

  result.style.display == 'block'
    ? showBtn.textContent = 'Show status code'
    : showBtn.textContent = 'Hide status code';

  result.style.display == 'block'
    ? result.style.display = 'none'
    : result.style.display = 'block';

}




