import { html } from "../../node_modules/lit-html/lit-html.js";
import { searchFruit } from "../data/fruits.js";

const searchTemplate = (fruit, onSearch) => html`
  <section id="search">
    <div class="form">
      <h2>Search</h2>
      <form class="search-form" @submit=${onSearch}>
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
      ${fruit.length > 0 ? fruit.map(createCard) : html`<p class="no-result">No result.</p>`}
    </div>
  </section>`;

const createCard = (fruit) => html`
  <div class="fruit">
    <img src="${fruit.imageUrl}" alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
  </div>
`;

export async function showSearch(ctx) {
  ctx.render(searchTemplate(false, onSearch));

  async function onSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value;

    if (!query) {
      return alert('Enter your search');
    }

    const fruits = await searchFruit(query);
    ctx.render(searchTemplate(fruits, onSearch));
  }
}
