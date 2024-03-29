import page from '../../node_modules/page/page.mjs';
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';
import { getUserData } from '../util.js';

const layout = document.querySelector("header");
 const layoutTemplate = (hasUser) => html`
    <nav>
      <section class="logo">
        <img src="./images/logo.png" alt="logo">
      </section>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/catalog">Dashboard</a></li>
        ${!hasUser 
          ? html` <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>` 
          : html` <li><a href="/create">Create Postcard</a></li>
        <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>`}
      </ul>
    </nav>`;

export function updateLayout() {
  const user = getUserData();
  render(layoutTemplate(user), layout);
}

function onLogout() {
  logout();
  updateLayout();
  page.redirect('/');
}