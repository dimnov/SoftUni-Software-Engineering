function addItem() {
    const input = document.getElementById('newItemText').value;
    const itemsList = document.getElementById('items');
    const li = document.createElement('li');

    if (!input) {
        return;
    } else {
        li.textContent = input;
        itemsList.appendChild(li);
        if (input != '') {
            document.getElementById('newItemText').value = '';
        }
    }
}