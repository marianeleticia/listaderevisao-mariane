// Mariane Letícia Souza Moreira
function animateButton(button) {
    button.classList.add('animate');
    setTimeout(() => {
        button.classList.remove('animate');
    }, 300);
}
