// Mariane Letícia Souza Moreira
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
document.addEventListener('click', function(event) {
    const isClickInside = document.querySelector('.dropdown').contains(event.target);
    if (!isClickInside) {
        document.getElementById('dropdown').style.display = 'none';
    }
});
