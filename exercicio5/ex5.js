// Mariane Letícia Souza Moreira
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    alert('Formulário validado!');
    return true;
}