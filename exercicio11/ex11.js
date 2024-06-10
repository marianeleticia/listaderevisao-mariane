// Mariane Letícia Souza Moreira
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    if (navList.style.display === 'flex' || navList.style.display === '') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'flex';
    }
});


window.addEventListener('resize', function() {
    var navList = document.getElementById('nav-list');
    if (window.innerWidth > 768) {
        navList.style.display = 'flex';
    } else {
        navList.style.display = 'none';
    }
});
