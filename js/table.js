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


// Fonction pour mettre à jour les données du tableau
function updateTableData() {
    const username = localStorage.getItem('currentUser');
    if (!username) return;

    const userData = JSON.parse(localStorage.getItem(username));
    if (!userData) return;

    // Parcourir tous les niveaux et catégories
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const categories = ['grammaire', 'vocabulaire', 'comprehension'];

    levels.forEach(level => {
        categories.forEach(category => {
            const categoryData = userData.levels[level].categories[category];
            if (categoryData) {
                // Mettre à jour le score
                const scoreElement = document.getElementById(`score-${category}-${level}`);
                if (scoreElement) {
                    scoreElement.textContent = `${categoryData.bestScore || 0}/10`;
                }

                // Mettre à jour les tentatives
                const attemptsElement = document.getElementById(`attempts-${category}-${level}`);
                if (attemptsElement) {
                    attemptsElement.textContent = categoryData.attempts || 0;
                }

                // Ajouter une classe pour les catégories validées
                const row = document.querySelector(`tr[data-level="${level}"][data-category="${category}"]`);
                if (row) {
                    if (categoryData.validation) {
                        row.classList.add('validated');
                        row.style.backgroundColor = '#d4edda';
                    }
                }
            }
        });
    });
}

// Fonction de recherche
document.querySelector('.search').addEventListener('input', function(e) {
    const searchValue = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('tr[data-level]');

    rows.forEach(row => {
        const level = row.getAttribute('data-level').toLowerCase();
        if (level.includes(searchValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Fonction de filtrage par catégorie
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

// Fonction pour télécharger le rapport PDF
document.querySelector('.download').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const username = localStorage.getItem('currentUser');
    const userData = JSON.parse(localStorage.getItem(username));

    // Ajouter le titre
    doc.setFontSize(16);
    doc.text(`Rapport de progression - ${username}`, 20, 20);

    // Ajouter les données du tableau
    let yPosition = 40;
    const categories = ['Grammaire', 'Vocabulaire', 'Compréhension'];
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    categories.forEach(category => {
        doc.setFontSize(14);
        doc.text(category, 20, yPosition);
        yPosition += 10;

        doc.setFontSize(12);
        levels.forEach(level => {
            const categoryData = userData.levels[level].categories[category.toLowerCase()];
            const score = categoryData ? `${categoryData.bestScore || 0}/10` : '-/10';
            const attempts = categoryData ? categoryData.attempts || 0 : 0;
            
            doc.text(`${level}: Score ${score}, Tentatives ${attempts}`, 30, yPosition);
            yPosition += 7;
        });
        yPosition += 10;
    });

    // Sauvegarder le PDF
    doc.save(`rapport_${username}.pdf`);
});

// Appeler updateTableData au chargement de la page
document.addEventListener('DOMContentLoaded', updateTableData);