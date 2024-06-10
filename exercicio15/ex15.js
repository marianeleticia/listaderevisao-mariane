// Mariane Letícia Souza Moreira
document.getElementById('text-input').addEventListener('input', function() {
    var text = this.value.trim();
    var wordCount = text ? text.split(/\s+/).length : 0;
    document.getElementById('word-count').textContent = wordCount;
});
