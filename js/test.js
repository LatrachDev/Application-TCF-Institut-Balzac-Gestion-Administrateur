function endQuiz() {
    clearInterval(timer);
    
    const username = localStorage.getItem('currentUser');
    const userData = JSON.parse(localStorage.getItem(username));
    const timeUsed = 300 - timeLeft;
    
    // Vérifier si la catégorie existe, sinon l'initialiser
    if (!userData.levels[currentLevel].categories[currentCategory]) {
        userData.levels[currentLevel].categories[currentCategory] = {
            bestScore: 0,
            attempts: 0,
            validation: false,
            time: Infinity
        };
    }
    
    const categoryData = userData.levels[currentLevel].categories[currentCategory];
    categoryData.attempts = (categoryData.attempts || 0) + 1;
    categoryData.time = Math.min(categoryData.time || Infinity, timeUsed);
    categoryData.score = score;
    categoryData.bestScore = Math.max(categoryData.bestScore || 0, score);
    categoryData.validation = score === 10;
    
    if (checkLevelCompletion(userData, currentLevel)) {
        showLevelCompletionMessage();
    }
    
    localStorage.setItem(username, JSON.stringify(userData));
    displayResults(score, timeUsed, categoryData);
    updateTableData(); // Assurez-vous que cette fonction est appelée pour mettre à jour le tableau
  }
  