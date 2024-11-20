document.addEventListener('DOMContentLoaded', () => {

    function checkAdminAuth() {
        const currentUser = localStorage.getItem('currentUser');
        const adminData = localStorage.getItem('admin');
  
        if (!currentUser || !adminData) {
            window.location.href = 'admin.html';
            return false;
        }
  
        const admin = JSON.parse(adminData);
        if (currentUser !== 'admin' || admin.status !== 'admin') {
            window.location.href = 'admin.html';
            return false;
        }
  
        return true;
    }
  
    if (!checkAdminAuth()) return;
  
  
    function initializeQuestions() {
        const existingQuestions = localStorage.getItem('quizQuestions');
        if (!existingQuestions) {
            const defaultQuestions = [
                {
                    level: "A1",
                    categories: {
                        grammaire: [],
                        vocabulaire: [],
                        comprehension: []
                    }
                },
                {
                    level: "A2",
                    categories: {
                        grammaire: [],
                        vocabulaire: [],
                        comprehension: []
                    }
                },
                {
                    level: "B1",
                    categories: {
                        grammaire: [],
                        vocabulaire: [],
                        comprehension: []
                    }
                },
                {
                    level: "B2",
                    categories: {
                        grammaire: [],
                        vocabulaire: [],
                        comprehension: []
                    }
                },
                {
                    level: "C1",
                    categories: {
                        grammaire: [],
                        vocabulaire: [],
                        comprehension: []
                    }
                },
                {
                    level: "C2",
                    categories: {
                        grammaire: [],
                        vocabulaire: [],
                        comprehension: []
                    }
                }
            ];
            localStorage.setItem('quizQuestions', JSON.stringify(defaultQuestions));
        }
    }
  
    initializeQuestions();
  
    const questionForm = document.getElementById('questionForm');
    const questionsContainer = document.getElementById('questionsContainer');
  
  
    function showConfirmationMessage(message, isError = false) {
        const messageElement = document.getElementById('confirmationMessage');
        if (!messageElement) return;
  
        messageElement.textContent = message;
        messageElement.className = `fixed bottom-4 right-4 p-4 rounded-lg shadow-lg transform translate-y-full opacity-0 transition-all duration-300 ${
            isError ? 'bg-red-500' : 'bg-green-500'
        } text-white`;
        
        messageElement.style.display = 'block';
        
        setTimeout(() => {
            messageElement.style.transform = 'translateY(0)';
            messageElement.style.opacity = '1';
        }, 100);
  
        setTimeout(() => {
            messageElement.style.transform = 'translateY(100%)';
            messageElement.style.opacity = '0';
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 300);
        }, 3000);
    }
  
    function displayQuestions() {
        const questions = JSON.parse(localStorage.getItem('quizQuestions'));
        let html = '';
  
        questions.forEach(levelData => {
            Object.entries(levelData.categories).forEach(([category, categoryQuestions]) => {
                if (categoryQuestions && categoryQuestions.length > 0) {
                    categoryQuestions.forEach((question, index) => {
                        html += `
                            <div class="bg-white shadow-md rounded-lg p-4 mb-4">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="font-bold text-blue-600">Niveau ${levelData.level} - ${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                    <div class="flex gap-2">
                                        <button onclick="editQuestion('${levelData.level}', '${category}', ${index})" 
                                                class="text-blue-500 hover:text-blue-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                            </svg>
                                        </button>
                                        <button onclick="deleteQuestion('${levelData.level}', '${category}', ${index})" 
                                                class="text-red-500 hover:text-red-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <p class="text-gray-700 mb-2">${question.question}</p>
                                <div class="space-y-1">
                                    ${question.options.map((opt, i) => `
                                        <div class="flex items-center">
                                            <span class="w-4 h-4 mr-2 ${i === question.answer ? 'text-green-500' : 'text-gray-400'}">●</span>
                                            <span>${opt}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    });
                }
            });
        });
  
        questionsContainer.innerHTML = html || '<p class="text-center text-gray-500 p-4">Aucune question disponible</p>';
    }
  
  
    window.editQuestion = function(level, category, index) {
        const questions = JSON.parse(localStorage.getItem('quizQuestions'));
        const levelData = questions.find(q => q.level === level);
        const question = levelData.categories[category][index];
  
        document.getElementById('questionText').value = question.question;
        document.getElementById('answerOptions').value = question.options.join(', ');
        document.getElementById('correctAnswer').value = question.options[question.answer];
        document.getElementById('level').value = level;
        document.getElementById('category').value = category;
  
        const submitButton = document.querySelector('#questionForm button[type="submit"]');
        submitButton.textContent = 'Mettre à jour la question';
        
        questionForm.dataset.editIndex = index;
        questionForm.dataset.editLevel = level;
        questionForm.dataset.editCategory = category;
    };
  
    window.deleteQuestion = function(level, category, index) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette question ?')) {
            const questions = JSON.parse(localStorage.getItem('quizQuestions'));
            const levelData = questions.find(q => q.level === level);
            
            if (levelData && levelData.categories[category]) {
                levelData.categories[category].splice(index, 1);
                localStorage.setItem('quizQuestions', JSON.stringify(questions));
                displayQuestions();
                showConfirmationMessage("Question supprimée avec succès!");
            }
        }
    };
  
   
    questionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const questionText = document.getElementById('questionText').value.trim();
        const answerOptions = document.getElementById('answerOptions').value.split(',').map(opt => opt.trim());
        const correctAnswer = document.getElementById('correctAnswer').value.trim();
        const level = document.getElementById('level').value;
        const category = document.getElementById('category').value.toLowerCase();
  
        if (!questionText || answerOptions.length !== 4) {
            showConfirmationMessage("Veuillez fournir une question et exactement 4 options de réponse.", true);
            return;
        }
  
        const newQuestion = {
            question: questionText,
            options: answerOptions,
            answer: answerOptions.findIndex(opt => opt.toLowerCase() === correctAnswer.toLowerCase())
        };
  
        if (newQuestion.answer === -1) {
            showConfirmationMessage("La réponse correcte doit correspondre exactement à l'une des options.", true);
            return;
        }
  
        const questions = JSON.parse(localStorage.getItem('quizQuestions'));
        const levelData = questions.find(q => q.level === level);
  
      
        const editIndex = questionForm.dataset.editIndex;
        const editLevel = questionForm.dataset.editLevel;
        const editCategory = questionForm.dataset.editCategory;
  
        if (editIndex !== undefined) {
  
            const oldLevelData = questions.find(q => q.level === editLevel);
            oldLevelData.categories[editCategory].splice(editIndex, 1);
  
            if (!levelData.categories[category]) {
                levelData.categories[category] = [];
            }
            levelData.categories[category].push(newQuestion);
  
            delete questionForm.dataset.editIndex;
            delete questionForm.dataset.editLevel;
            delete questionForm.dataset.editCategory;
            document.querySelector('#questionForm button[type="submit"]').textContent = 'Ajouter la question';
            
            showConfirmationMessage("Question mise à jour avec succès!");
        } else {
  
            if (!levelData.categories[category]) {
                levelData.categories[category] = [];
            }
            levelData.categories[category].push(newQuestion);
            showConfirmationMessage("Question ajoutée avec succès!");
        }
  
        localStorage.setItem('quizQuestions', JSON.stringify(questions));
        questionForm.reset();
        displayQuestions();
    });
  
  
    window.logout = function() {
        localStorage.removeItem('admin');
        localStorage.removeItem('currentUser');
        window.location.href = 'admin.html';
    };
  
  
    displayQuestions();
  });