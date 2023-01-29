function addItem() {
    const input = document.getElementById('newItemText').value;
    const list = document.getElementById('items');
    const li = document.createElement('li');
    const deleteBtn = document.createElement('a');

    li.textContent = input;

    li.appendChild(deleteBtn);
    list.appendChild(li);

    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';

    deleteBtn.addEventListener('click', () => li.remove());
}