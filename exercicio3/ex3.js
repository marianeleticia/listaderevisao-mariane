// Mariane Letícia Souza Moreira
function highlight(element) {
    const items = document.querySelectorAll('li');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}