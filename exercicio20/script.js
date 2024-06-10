//  Mariane Letícia Souza Moreira 
document.getElementById('file-input').addEventListener('change', function() {
    const preview = document.getElementById('file-preview');
    preview.innerHTML = '';
    Array.from(this.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100px';
            img.style.margin = '10px';
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Arquivos enviados com sucesso!');
});
