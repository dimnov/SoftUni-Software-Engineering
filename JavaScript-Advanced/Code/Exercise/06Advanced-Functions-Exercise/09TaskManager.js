function solve() {
    const inputTask = document.getElementById('task');
    const inputDesc = document.getElementById('description');
    const inputDate = document.getElementById('date');

    const sections = document.querySelectorAll('section');
    const [inputSection, openSection, progressSection, completeSection] = sections;

    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', addToDo);

    function addToDo(event) {
        event.preventDefault();

        if (!inputTask.value.trim() || !inputDesc.value.trim() || !inputDate.value.trim()) {
            return;
        }

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = inputTask.value;
        article.appendChild(h3);

        const pDesc = document.createElement('p');
        pDesc.textContent = `Description: ${inputDesc.value}`;
        article.appendChild(pDesc);

        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${inputDate.value}`;
        article.appendChild(pDate);

        const divBtns = document.createElement('div');
        divBtns.classList.add('flex');

        const startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start';
        startBtn.addEventListener('click', startArticle);
        divBtns.appendChild(startBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteArticle);
        divBtns.appendChild(deleteBtn);

        article.appendChild(divBtns);
        openSection.lastElementChild.appendChild(article);

        inputTask.value = '';
        inputDesc.value = '';
        inputDate.value = '';

        function deleteArticle() {
            article.remove();
        }

        function startArticle() {
            startBtn.remove();

            const finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.textContent = 'Finish';
            finishBtn.addEventListener('click', finishArticle);
            divBtns.appendChild(finishBtn);

            progressSection.lastElementChild.appendChild(article);
        }

        function finishArticle() {
            divBtns.remove();
            completeSection.lastElementChild.appendChild(article);
        }
    }
}