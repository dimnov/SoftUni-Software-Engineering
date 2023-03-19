import { register } from "../api/user.js";

const section = document.getElementById('registerView');
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showRegister(context) {
  ctx = context;
  context.showSection(section);
}

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const { email, password, repeatPassword } = Object.fromEntries(formData);

  if (!email || !password || !repeatPassword) {
    alert('Please fill all fields');
  }

  if (email.length < 3) {
    alert('Email must be at least 3 characters long');
  }

  if (password.length < 3) {
    alert('Password must be at least 3 characters long');
  }

  if (password !== repeatPassword) {
    alert('Passwords do not match');
  } else {
    await register(email, password);
    alert('Registration successful');
    form.reset();
    ctx.updateNav();
    ctx.goTo("/catalog");
  }
}