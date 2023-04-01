import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteFruit, getById } from '../data/fruits.js';
import { getUserData } from '../util.js';

const detailsTemplate = (fruit, onDelete, isOwner) => html`
            <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src="${fruit.imageUrl}" alt="example1" />
          <p id="details-title">${fruit.name}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p>
              ${fruit.description}
              </p>
              <p id="nutrition">Nutrition</p>
              <p id="details-nutrition">
              ${fruit.nutrition}
              </p>
            </div>
            ${isOwner ? html`<div id="action-buttons">
              <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>` : null}
          </div>
        </div>
      </section>`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const fruitId = await getById(id);
  const userId = await getUserData();

  let isOwner = false;

  if (userId) {
    isOwner = fruitId._ownerId === userId._id;
  }

  ctx.render(detailsTemplate(fruitId, onDelete, isOwner));

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete?');

    if (choice) {
      await deleteFruit(id);
      ctx.page.redirect('/catalog');
    }
  }
}