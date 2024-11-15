// Fonction pour calculer et afficher les statistiques
function updateStatistics() {
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const successRates = {};
    const attempts = {};
    let totalUsers = 0;

    // Initialiser les compteurs
    levels.forEach(level => {
        successRates[level] = { success: 0, total: 0 };
        attempts[level] = 0;
    });

    // Parcourir tous les utilisateurs dans le localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== 'currentUser' && key !== 'quizQuestions') {
            try {
                const userData = JSON.parse(localStorage.getItem(key));
                if (userData && userData.levels) {
                    totalUsers++;

                    // Parcourir chaque niveau
                    levels.forEach(level => {
                        if (userData.levels[level]) {
                            // Parcourir chaque catégorie
                            ['grammaire', 'vocabulaire', 'comprehension'].forEach(category => {
                                const categoryData = userData.levels[level].categories[category];
                                if (categoryData) {
                                    // Compter les tentatives
                                    attempts[level] += categoryData.attempts || 0;

                                    // Calculer le taux de réussite
                                    if (categoryData.attempts > 0) {
                                        successRates[level].total++;
                                        if (categoryData.bestScore === 10) {
                                            successRates[level].success++;
                                        }
                                    }
                                }
                            });
                        }
                    });
                }
            } catch (e) {
                console.error('Erreur lors de la lecture des données:', e);
                continue;
            }
        }
    }

    // Mettre à jour l'affichage
    levels.forEach(level => {
        // Calculer le taux de réussite
        const successRate = successRates[level].total > 0 
            ? Math.round((successRates[level].success / successRates[level].total) * 100) 
            : 0;

        // Mettre à jour les barres de progression du taux de réussite
        const successElement = document.querySelector(`.success-rate [data-level="${level}"] + .level-bar .level-progress`);
        const successTextElement = successElement.querySelector('.progress-text');
        const successLabelElement = document.querySelector(`.success-rate [data-level="${level}"] span:last-child`);
        
        successElement.style.width = `${successRate}%`;
        successTextElement.textContent = `${successRate}%`;
        successLabelElement.textContent = `${successRate}%`;

        // Calculer le pourcentage des tentatives (sur une échelle relative)
        const maxAttempts = Math.max(...Object.values(attempts));
        const attemptsPercentage = maxAttempts > 0 
            ? Math.round((attempts[level] / maxAttempts) * 100) 
            : 0;

        // Mettre à jour les barres de progression des tentatives
        const attemptsElement = document.querySelector(`.attempts [data-level="${level}"] + .level-bar .level-progress`);
        const attemptsTextElement = attemptsElement.querySelector('.progress-text');
        const attemptsLabelElement = document.querySelector(`.attempts [data-level="${level}"] span:last-child`);
        
        attemptsElement.style.width = `${attemptsPercentage}%`;
        attemptsTextElement.textContent = attempts[level];
        attemptsLabelElement.textContent = attempts[level];
    });
}

// Appeler la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', updateStatistics);