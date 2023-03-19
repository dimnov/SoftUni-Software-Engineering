function attachEvents() {
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const phoneBook = document.getElementById('phonebook');

    document.getElementById('btnLoad').addEventListener('click', loadContacts);
    document.getElementById('btnCreate').addEventListener('click', createContact);

    const phoneBookUrl = 'http://localhost:3030/jsonstore/phonebook';

    async function loadContacts() {
        phoneBook.innerHTML = '';

        const result = await fetch(phoneBookUrl);
        const data = await result.json();

        Object.values(data).forEach(contact => {
            const li = document.createElement('li');
            li.textContent = `${contact.person}: ${contact.phone}`;

            const delBtn = document.createElement('button');
            delBtn.setAttribute('id', contact._id);
            delBtn.textContent = 'Delete';

            li.appendChild(delBtn);
            phoneBook.appendChild(li);

            delBtn.addEventListener('click', deleteContact);

            async function deleteContact(event) {
                await fetch(`${phoneBookUrl}/${contact._id}`, {
                    method: 'DELETE',
                });
                event.target.parentNode.remove();
            }
        });
    }

    async function createContact() {
        if (!phoneInput.value || !personInput.value) return;

        await fetch(phoneBookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                person: personInput.value,
                phone: phoneInput.value,
            }),
        });

        personInput.value = '';
        phoneInput.value = '';

        document.getElementById('btnLoad').click();
    }
}

attachEvents();