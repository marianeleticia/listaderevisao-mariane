// Mariane Letícia Souza Moreira
function addComment() {
            const commentText = document.getElementById('comment').value;
            if (commentText === '') {
                alert('Por favor, escreva um comentário.');
                return;
            }
            const li = document.createElement('li');
            li.textContent = commentText;
            document.getElementById('comments-list').appendChild(li);
            document.getElementById('comment').value = '';
        }
