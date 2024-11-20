document.addEventListener('DOMContentLoaded', () => {
    console.log('Page admin chargée');

    // Récupération des éléments du DOM
    const adminLoginForm = document.getElementById('adminLoginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('error');
    const loginButton = document.getElementById('loginButton');

    // Fonction pour afficher les erreurs
    function showError(message) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }

    // Fonction pour cacher les erreurs
    function hideError() {
        errorElement.classList.add('hidden');
    }

    // Fonction de connexion
    function handleLogin(e) {
        e.preventDefault();
        console.log('Tentative de connexion');

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        console.log('Username:', username);
        console.log('Password:', password);

        if (username === 'admin' && password === 'admin123') {
            console.log('Identifiants corrects');

            const adminUser = {
                id: 'admin',
                name: 'admin',
                status: 'admin',
                timestamp: new Date().getTime()
            };

            try {
                localStorage.setItem('admin', JSON.stringify(adminUser));
                localStorage.setItem('currentUser', 'admin');
                console.log('Admin connecté avec succès');
                window.location.href = 'statistique.html';
            } catch (error) {
                console.error('Erreur:', error);
                showError('Erreur lors de la connexion');
            }
        } else {
            console.log('Identifiants incorrects');
            showError('Identifiants incorrects');
            passwordInput.value = '';
        }
    }

    // Écouteurs d'événements
    adminLoginForm.addEventListener('submit', handleLogin);

    usernameInput.addEventListener('input', hideError);
    passwordInput.addEventListener('input', hideError);

    // Vérification de la session existante
    const currentUser = localStorage.getItem('currentUser');
    const adminData = localStorage.getItem('admin');

    if (currentUser === 'admin' && adminData) {
        console.log('Session admin existante');
        window.location.href = 'gestionQuestions.html';
    }
});