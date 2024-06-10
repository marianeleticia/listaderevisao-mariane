// Mariane Letícia Souza Moreira
function addRow() {
    const table = document.querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = '<td>Nova Linha</td><td>Nova Linha</td>';
    table.appendChild(newRow);
}