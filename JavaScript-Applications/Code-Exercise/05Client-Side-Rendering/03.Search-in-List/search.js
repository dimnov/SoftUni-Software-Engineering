import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const cardTemplate = (towns) => html`
<ul>
${towns.map(town => html`<li id=${town}>${town}</li>`)}
</ul>
`;

const renderTownsComponent = (towns) => {
   cardTemplate(towns);
   const rootElement = document.querySelector('#towns');
   render(cardTemplate(towns), rootElement);
}

renderTownsComponent(towns);

document.querySelector('BUTTON').addEventListener('click', search);

const searchTown = (towns, text) => {
   return towns.filter(town => {
      if (town.includes(text)) {
         const match = document.getElementById(`${town}`);//try with querySelector
         match.setAttribute('class', 'active');
         return town;//TOWN
      }
   });
}

function search() {
   const text = document.querySelector('#searchText').value;
   const result = searchTown(towns, text);
   const resultHTML = document.getElementById('result');
   resultHTML.textContent = `${result.length} matches found`;


}
