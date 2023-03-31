const host = 'http://localhost:3030/jsonstore/advanced/dropdown';
const menu = document.getElementById('menu');
const form = document.querySelector('form');

async function dropdownMenu() {
    const response = await fetch(host);
    const data = await response.json();

    Object.values(data).forEach(item => {
        const option = createOptionElement(item._id, item.text);
        menu.appendChild(option);
    });
}

function createOptionElement(value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    return option;
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const item = document.getElementById('itemText');
    const text = item.value;

    const response = await fetch(host, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
    });

    if (response.ok) {
        const data = await response.json();
        const option = createOptionElement(data._id, data.text);
        menu.appendChild(option);
        item.value = '';
    }
});

dropdownMenu();