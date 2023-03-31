import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { showHome } from './views/home.js';
import { showCatalog } from './views/catalog.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { updateNav } from './views/nav.js';
import { showDetails } from './views/details.js';
import { getUserData } from './util.js';
import { showCreate } from './views/create.js';
import { showEdit } from './views/edit.js';
import { showSearch } from './views/search.js';

const main = document.getElementById('main-content');

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/details/:id', showDetails);
page('/create', showCreate);
page('/edit/:id', showEdit);
page('/login', showLogin);
page('/register', showRegister);
page('/search', showSearch);

updateNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = renderMain;
  ctx.updateNav = updateNav;

  const user = getUserData();
  if (user) {
    ctx.user = user;
  }

  next();
}

function renderMain(context) {
  render(context, main);
}
