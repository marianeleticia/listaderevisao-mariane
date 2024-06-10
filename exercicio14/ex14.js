// Mariane Letícia Souza Moreira
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.gallery img').forEach(img => {
            if (filter === 'all' || img.getAttribute('data-category') === filter) {
                img.style.display = '';
            } else {
                img.style.display = 'none';
            }
        });
    });
});