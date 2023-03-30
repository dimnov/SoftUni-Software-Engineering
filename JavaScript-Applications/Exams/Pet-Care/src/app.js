import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { showHome } from './views/home.js';
import { showCatalog } from './views/catalog.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { updateLayout } from './views/layout.js';
import { showDetails } from './views/details.js';
import { getUserData } from './util.js';
import { showCreate } from './views/create.js';
import { showEdit } from './views/edit.js';

const main = document.getElementById('content');

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/create', showCreate);
page('/edit/:id', showEdit);
page('/login', showLogin);
page('/register', showRegister);

updateLayout();
page.start();

function decorateContext(ctx, next) {
  ctx.render = renderMain;
  ctx.updateLayout = updateLayout;

  const user = getUserData();
  if (user) {
    ctx.user = user;
  }

  next();
}

function renderMain(context) {
  render(context, main);
}
