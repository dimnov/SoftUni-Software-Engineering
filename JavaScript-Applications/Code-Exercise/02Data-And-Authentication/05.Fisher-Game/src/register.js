document.getElementById('user').style.display = 'none';

const registerForm = document.querySelector("form");

registerForm.addEventListener("submit", onUserRegister);

const url = 'http://localhost:3030/users/register';

async function onUserRegister(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const { email, password, rePass } = Object.fromEntries(formData);

  try {
    if ([...formData.values()].some(x => x === "")) {
      throw new Error("All fields are required");
    } else if (password !== rePass) {
      throw new Error("Passwords do not match");
    }

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, rePass }),
    })

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    const user = {
      email: data.email,
      id: data._id,
      token: data.accessToken,
    }
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "./index.html";
  } catch (error) {
    alert(error.message);
  }
}