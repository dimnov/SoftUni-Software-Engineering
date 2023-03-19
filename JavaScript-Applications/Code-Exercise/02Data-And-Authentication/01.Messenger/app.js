function attachEvents() {
    document.getElementById('submit').addEventListener('click', addComment);
    document.getElementById('refresh').addEventListener('click', refresh);
}

const url = 'http://localhost:3030/jsonstore/messenger';

function addComment() {
    const authorName = document.querySelector('[name="author"]');
    const messageText = document.querySelector('[name="content"]');

    if (!authorName.value || !messageText.value) return;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            author: authorName.value.trim(),
            content: messageText.value.trim(),
        })
    }).then(res => {
        if (!res.ok) throw new Error('Error');
        return res.json();

    }).catch((err) => alert(err.message));
}

function refresh(event) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Error');
            return response.json();
        }).then(addCommentToTextArea).catch(error => alert(error.message));
}

function addCommentToTextArea(data) {
    const textArea = document.getElementById('messages');
    const allComments = [];
    Object.values(data).forEach(comment => allComments.push(`${comment.author}: ${comment.content}`));
    textArea.value = allComments.join('\n');
}

attachEvents();