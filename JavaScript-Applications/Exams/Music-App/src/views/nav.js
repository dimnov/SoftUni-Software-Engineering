import page from '../../node_modules/page/page.mjs';
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';
import { getUserData } from '../util.js';

const layout = document.querySelector("nav");
const navTemplate = (hasUser) => html`
                    <img src="./images/headphones.png">
                    <a href="/">Home</a>
                    <ul>
                      <!--All user-->
                      <li><a href="/catalog">Catalog</a></li>
                      <li><a href="/search">Search</a></li>
                      ${!hasUser ? html`<li><a href="/login">Login</a></li>
                      <li><a href="/register">Register</a></li>` : html`<li><a href="/create">Create Album</a></li>
                      <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>`}
                    </ul>`;

export function updateNav() {
  const user = getUserData();
  render(navTemplate(user), layout);
}

function onLogout() {
  logout();
  updateNav();
  page.redirect('/');
}