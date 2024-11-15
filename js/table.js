// four filtre ****************************************
document.getElementById('categoryFilter').addEventListener('change', function() {
    const selectedCategory = this.value.toLowerCase();
    const categories = document.querySelectorAll('.grammaire, .vocabulaire, .comprehension');
    
    categories.forEach(category => {
        if (selectedCategory === 'toute') {
            category.style.display = 'block';
        } else {
            category.style.display = category.className === selectedCategory ? 'block' : 'none';
        }
    });
});


// rechercher par username ****************************************

// recherche par user name
document.querySelector('.search').addEventListener('input', function(e) {
    const searchValue = e.target.value.trim().toLowerCase();
    const usersList = document.getElementById('users-list-body');
    
    // Si le champ de recherche est vide
    if (searchValue === '') {
        displayAllUsers();
        resetScores();
        return;
    }
    // Chercher l'utilisateur spécifique
    let foundUser = null;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== 'currentUser') { // Ignorer la clé currentUser
            try {
                const userData = JSON.parse(localStorage.getItem(key));
                if (userData && userData.name && userData.name.toLowerCase() === searchValue) {
                    foundUser = userData;
                    break;
                }
            } catch (e) {
                continue;
            }
        }
    }
      // Mettre à jour l'affichage
      if (foundUser) {
        // Mettre à jour la liste des utilisateurs
        usersList.innerHTML = `
            <tr>
                <td>${foundUser.id}</td>
                <td>${foundUser.name}</td>
                <td>${foundUser.currentLevel || '-'}</td>
            </tr>
        `;

        // Mettre à jour les scores
        updateScores(foundUser);
    } else {
        usersList.innerHTML = ''; // Vider la liste si aucun utilisateur n'est trouvé
        resetScores();
    }
});



function updateScores(userData) {
    const categories = ['grammaire', 'vocabulaire', 'comprehension'];
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    categories.forEach(category => {
        levels.forEach(level => {
            const scoreElement = document.getElementById(`score-${category}-${level}`);
            const attemptsElement = document.getElementById(`attempts-${category}-${level}`);

            if (userData.levels && 
                userData.levels[level] && 
                userData.levels[level].categories && 
                userData.levels[level].categories[category]) {
                
                const categoryData = userData.levels[level].categories[category];
                scoreElement.textContent = `${categoryData.bestScore || 0}/10`;
                attemptsElement.textContent = categoryData.attempts || 0;
            } else {
                scoreElement.textContent = '-/10';
                attemptsElement.textContent = '0';
            }
        });
    });
}

function resetScores() {
    const categories = ['grammaire', 'vocabulaire', 'comprehension'];
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    categories.forEach(category => {
        levels.forEach(level => {
            const scoreElement = document.getElementById(`score-${category}-${level}`);
            const attemptsElement = document.getElementById(`attempts-${category}-${level}`);
            
            scoreElement.textContent = '-/10';
            attemptsElement.textContent = '0';
        });
    });
}



//*******************************************************

// Fonction pour afficher tous les utilisateurs
function displayAllUsers() {
    const usersList = document.getElementById('users-list-body');
    usersList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== 'currentUser') { // Ignorer la clé currentUser
            try {
                const userData = JSON.parse(localStorage.getItem(key));
                if (userData && userData.id && userData.name) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${userData.id}</td>
                        <td>${userData.name}</td>
                        <td>${userData.currentLevel || '-'}</td>
                    `;
                    usersList.appendChild(row);
                }
            } catch (e) {
                continue;
            }
        }
    }
}

// Initialiser l'affichage au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    displayAllUsers();
    resetScores();
});