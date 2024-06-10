// Mariane Letícia Souza Moreira
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const welcomeMessage = document.getElementById('welcome-message');

    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            const username = localStorage.getItem('username');
            showWelcomeMessage(username);
        }
    }

    function showWelcomeMessage(username) {
        loginForm.style.display = 'none';
        welcomeMessage.textContent = `Bem-vindo, ${username}!`;
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        if (username === 'admin' && password === '1234') {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            showWelcomeMessage(username);
        } else {
            alert('Usuário ou senha incorretos');
        }
    });

    checkLoginStatus();
});
