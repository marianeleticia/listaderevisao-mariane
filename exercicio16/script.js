// Mariane Letícia Souza Moreira
document.getElementById('add-task').addEventListener('click', function() {
    var taskText = document.getElementById('new-task').value.trim();
    if (taskText !== '') {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    document.getElementById('task-list').innerHTML += '<li>' + taskText + '</li>';
                } else {
                    alert('Erro ao adicionar tarefa');
                }
            }
        };
        xhr.open('POST', 'add_task.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('text=' + encodeURIComponent(taskText));
    }
});
