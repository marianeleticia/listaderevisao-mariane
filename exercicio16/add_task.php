<!-- Mariane Letícia Souza Moreira -->
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['text'])) {
    $file = 'tasks.json';
    $tasks = [];
    
    if (file_exists($file)) {
        $tasks = json_decode(file_get_contents($file), true);
    }
    
    $newTask = ['text' => $_POST['text']];
    $tasks[] = $newTask;
    
    file_put_contents($file, json_encode($tasks));
    echo 'Tarefa adicionada com sucesso';
} else {
    http_response_code(400);
    echo 'Erro: Parâmetros inválidos';
}
?>
