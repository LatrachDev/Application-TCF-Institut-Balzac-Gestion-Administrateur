
const quizQuestions = [
    { 
        question: "Quel est le féminin de 'acteur' ?", 
        options: ["Acteuse", "Actrice", "Acteur", "Actricee"], 
        answer: 1 
    },
    { 
        question: "Quel temps utilise-t-on pour une action passée ?", 
        options: ["Présent", "Futur", "Passé composé", "Imparfait"], 
        answer: 2 
    },
    { 
        question: "Quel est le pluriel de 'cheval' ?", 
        options: ["Chevaux", "Chevals", "Cheval", "Chevales"], 
        answer: 0 
    },
    { 
        question: "Quelle est la bonne conjugaison de 'nous (aller)' ?", 
        options: ["Nous allé", "Nous vont", "Nous allons", "Nous allions"], 
        answer: 2 
    },
    { 
        question: "Quel est le féminin de 'beau' ?", 
        options: ["Béau", "Bel", "Belle", "Belles"], 
        answer: 2 
    },
    { 
        question: "Quel est le participe passé de 'finir' ?", 
        options: ["Finissant", "Finis", "Finie", "Fini"], 
        answer: 3 
    },
    { 
        question: "Quel est le verbe à l'infinitif de 'suis' ?", 
        options: ["Être", "Avoir", "Faire", "Aller"], 
        answer: 0 
    },
    { 
        question: "Quel est le synonyme de 'rapide' ?", 
        options: ["Lent", "Calme", "Vite", "Lourd"], 
        answer: 2 
    },
    { 
        question: "Quel est le pluriel de 'carnet' ?", 
        options: ["Carnet", "Carnettes", "Carnés", "Carnets"], 
        answer: 3 
    },
    { 
        question: "Quel est le temps de 'j'irai' ?", 
        options: ["Présent", "Futur", "Imparfait", "Passé composé"], 
        answer: 1 
    },
    { 
        question: "Comment s'appelle le verbe 'manger' au passé composé ?", 
        options: ["Mangé", "Manger", "Mangeait", "Mangée"], 
        answer: 0 
    },
    { 
        question: "Quel est le féminin de 'gentil' ?", 
        options: ["Gentillette", "Gentils", "Gentille", "Gentilles"], 
        answer: 2 
    },
    { 
        question: "Quel est le pluriel de 'mur' ?", 
        options: ["Mur", "Mure", "Muri", "Murs"], 
        answer: 3 
    },
    { 
        question: "Quel est le verbe à l'infinitif de 'sais' ?", 
        options: ["Savoir", "Sais", "Savore", "Savoirie"], 
        answer: 0 
    },
    { 
        question: "Quel est le masculin de 'heureuse' ?", 
        options: ["Heureuxse", "Heureuxs", "Heureux", "Heureusee"], 
        answer: 2 
    },
    { 
        question: "Quel temps utilise-t-on pour exprimer une habitude ?", 
        options: ["Présent", "Futur", "Conditionnel", "Imparfait"], 
        answer: 0 
    },
    { 
        question: "Quel est le contraire de 'lourd' ?", 
        options: ["Fort", "Grand", "Léger", "Riche"], 
        answer: 2 
    },
    { 
        question: "Quel est le pluriel de 'vache' ?", 
        options: ["Vachères", "Vaches", "Vachés", "Vache"], 
        answer: 1 
    },
    { 
        question: "Quel est le participe passé de 'voir' ?", 
        options: ["Voir", "Vus", "Vues", "Vu"], 
        answer: 3 
    },
    { 
        question: "Quelle est la bonne conjugaison pour 'je (manger)' ?", 
        options: ["Je mangeais", "Je mangerai", "Je mangé", "Je mange"], 
        answer: 3 
    },
    { 
        question: "Quel est le féminin de 'roi' ?", 
        options: ["Reine", "Rois", "Roisess", "Roin"], 
        answer: 0 
    },
    { 
        question: "Quel est le temps de 'nous avons' ?", 
        options: ["Imparfait", "Futur", "Présent", "Passé composé"], 
        answer: 3 
    },
    { 
        question: "Quel est le pluriel de 'journal' ?", 
        options: ["Journal", "Journales", "Journaux", "Journauxes"], 
        answer: 2 
    },
    { 
        question: "Quel est le contraire de 'noir' ?", 
        options: ["Gris", "Bleu", "Blanc", "Rouge"], 
        answer: 2 
    },
    { 
        question: "Quel temps utilise-t-on pour exprimer une action terminée ?", 
        options: ["Présent", "Futur", "Imparfait", "Passé composé"], 
        answer: 3 
    },-
    { 
        question: "Quelle est la bonne conjugaison pour 'il (faire)' ?", 
        options: ["Il faisait", "Il fera", "Il fait", "Il faisait"], 
        answer: 2 
    },
    { 
        question: "Quel est le féminin de 'français' ?", 
        options: ["Française", "Françaisse", "Françai", "Françaises"], 
        answer: 0 
    },
    { 
        question: "Quel est le synonyme de 'content' ?", 
        options: ["Triste", "Fâché", "Heureux", "Déçu"], 
        answer: 2 
    },
    { 
        question: "Quel est le participe passé de 'prendre' ?", 
        options: ["Prendre", "Prises", "Pris", "Prenez"], 
        answer: 2 
    },
    { 
        question: "Quel est le pluriel de 'fleur' ?", 
        options: ["Fleur", "Fleures", "Fleurs", "Fleuries"], 
        answer: 2 
    },
    { 
        question: "Quel est le temps de 'ils seront' ?", 
        options: ["Présent", "Imparfait", "Futur", "Passé composé"], 
        answer: 2 
    },
    { 
        question: "Comment s'appelle le verbe 'être' au passé composé ?", 
        options: ["Être", "Étais", "Suis", "Été"], 
        answer: 3 
    },
    { 
        question: "Quel est le féminin de 'vieux' ?", 
        options: ["Vieus", "Vieuxe", "Vieille", "Vieilles"], 
        answer: 2 
    },
    { 
        question: "Quel temps utilise-t-on pour exprimer une vérité générale ?", 
        options: ["Présent", "Imparfait", "Futur", "Passé composé"], 
        answer: 0 
    },
    { 
        question: "Quel est le synonyme de 'difficile' ?", 
        options: ["Facile", "Simple", "Complexe", "Compliqué"], 
        answer: 2 
    },
    { 
        question: "Quel est le pluriel de 'nez' ?", 
        options: ["Noses", "Néz", "Nez", "Nezz"], 
        answer: 2 
    },
    { 
        question: "Quelle est la bonne conjugaison pour 'elle (venir)' ?", 
        options: ["Elle venais", "Elle viendra", "Elle vient", "Elle venait"], 
        answer: 2 
    },
    { 
        question: "Quel est le féminin de 'sage' ?", 
        options: ["Sage", "Sagette", "Sagesse", "Sagee"], 
        answer: 0 
    },
    { 
        question: "Quel est le participe passé de 'choisir' ?", 
        options: ["Choisir", "Choisissant", "Choisi", "Choisissez"], 
        answer: 2 
    },
    { 
        question: "Quel est le synonyme de 'vivre' ?", 
        options: ["Survivre", "Habiter", "Exister", "Rester"], 
        answer: 2 
    }
 ];

let questionsRestantes = [];
let questionActuelle = 0;
let score = 0;
const nombreQuestionsTotal = 10;
const pointsParQuestion = 1;
let useranswers = [];
let timer;
let timeLeft = 20;

function sauvegarderDernierScore(score, niveau) {
    localStorage.setItem('dernierScore', JSON.stringify({
        score: score,
        niveau: niveau,
        
    }));
}

function afficherDernierScore() {
    const dernierScoreElement = document.querySelector('.dernier-score');
    const dernierScore = JSON.parse(localStorage.getItem('dernierScore'));

    if (dernierScore) {
        dernierScoreElement.innerHTML = `
            <h3>Dernier Score</h3>
            <p>Score: ${dernierScore.score}/10</p>
            <p>Niveau: ${dernierScore.niveau}</p>
        `;
    } else {
        dernierScoreElement.innerHTML = '<p>Aucun score précédent</p>';
    }
}
function sauvegarderEtatQuiz() {
    localStorage.setItem('quizState', JSON.stringify({
        questionsRestantes: questionsRestantes,
        questionActuelle: questionActuelle,
        score: score,
        useranswers: useranswers,
        timeLeft: timeLeft
    }));
}

function chargerEtatQuiz() {
    const savedState = localStorage.getItem('quizState');

  
            const state = JSON.parse(savedState);

            questionsRestantes = state.questionsRestantes;
            questionActuelle = state.questionActuelle;
            score = state.score;
            useranswers = state.useranswers || [];
            timeLeft = state.timeLeft;

            afficherQuestion();
            document.querySelector('.btnAfficherRecap').disabled = false;
            document.querySelector('.btnredemare').disabled = false;
    }


function initialiserQuiz() {
    questionsRestantes = [...quizQuestions];
    melangerQuestions();
    questionsRestantes = questionsRestantes.slice(0, nombreQuestionsTotal);
    questionActuelle = 0;
    score = 0;
    timeLeft = 20;
    useranswers = [];

    document.querySelector('.score').innerHTML = '';
    document.querySelector('.niveau').innerHTML = '';
    document.querySelector('.resultats').innerHTML = '';

    const repElements = document.querySelectorAll('.rep');
    repElements.forEach(element => {
        element.style.pointerEvents = 'auto';
        element.classList.remove('correct', 'incorrect');
        element.style.backgroundColor = '';
    });

    document.querySelector('.btnSuivant').disabled = true;
    document.querySelector('.btnredemare').disabled = true;

    afficherQuestion();

    document.querySelector('.btnAfficherRecap').disabled = true;

    localStorage.removeItem('quizState');
}


function melangerQuestions() {
    for (let i = questionsRestantes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionsRestantes[i], questionsRestantes[j]] = [questionsRestantes[j], questionsRestantes[i]];
    }
}


function afficherQuestion() {
    const questionCounter = document.querySelector('.qst p');
    if (questionActuelle < nombreQuestionsTotal) {
        const question = questionsRestantes[questionActuelle];
        questionCounter.textContent = `Question ${questionActuelle + 1}/10: ${question.question}`;
        
        const repElements = document.querySelectorAll('.rep');
        repElements.forEach((element, index) => {
            element.querySelector('p').textContent = question.options[index];
            element.classList.remove('correct', 'incorrect');
            element.style.pointerEvents = 'auto';
            element.style.backgroundColor = '';

            if (useranswers[questionActuelle] !== undefined) {

                element.style.pointerEvents = 'none'; 
                if (index === useranswers[questionActuelle]) {
                    element.classList.add('selected'); 
                    element.style.backgroundColor = 'rgb(200, 200, 255)';
                }
            }
        });


        if (useranswers[questionActuelle] !== undefined) {
            document.querySelector('.btnSuivant').disabled = false; 
        } else {
            document.querySelector('.btnSuivant').disabled = true; 
        }

        timeLeft = 20;
        clearInterval(timer);
        startTimer();
    } else {
        terminerQuiz();
    }
}

function verifierReponse(index) {
    if (questionActuelle >= nombreQuestionsTotal) return;
    if (useranswers[questionActuelle] !== undefined) return; 

    clearInterval(timer);
    const question = questionsRestantes[questionActuelle];
    useranswers[questionActuelle] = index;
    const repElements = document.querySelectorAll('.rep');

    repElements.forEach(element => {
        element.style.pointerEvents = 'none'; 
    });

    if (index === question.answer) {
        score += pointsParQuestion;
        repElements[index].classList.add('correct');
        repElements[index].style.backgroundColor = 'rgb(0, 255, 0)';
    } else {
        repElements[index].classList.add('incorrect');
        repElements[question.answer].classList.add('correct');
        repElements[index].style.backgroundColor = 'rgb(255, 0, 0)';
        repElements[question.answer].style.backgroundColor = 'rgb(0, 255, 0)';
    }

    document.querySelector('.btnSuivant').disabled = false;

    sauvegarderEtatQuiz();
}

function terminerQuiz() {
    const scoreTotal = nombreQuestionsTotal;

    const finalscore = document.querySelector('.score');

    let niveau = determinerNiveau(score);
    afficherNiveau(score);

    sauvegarderDernierScore(score, niveau);

    document.querySelector('.btnAfficherRecap').disabled = false;

    const redemarrerButton = document.querySelector('.btnredemare');
    redemarrerButton.disabled = false;

    document.querySelector('.btnSuivant').disabled = true;
    afficherDernierScore();
    localStorage.removeItem('quizState');
}

function determinerNiveau(score) {
    if (score === nombreQuestionsTotal) {
        return "C2";
    } else if (score === 9) {
        return "C1";
    } else if (score >= 8) {
        return "B2";
    } else if (score >= 6) {
        return "B1";
    } else if (score >= 3) {
        return "A2";
    } else {
        return "A1";
    }
}

function afficher() {
        document.querySelector(".quiz").style.display = "none";
        document.querySelector(".hidden").style.display = "block";
        initialiserQuiz();
        localStorage.setItem('quizAffiche', 'true');
}

function terminer() {
    document.querySelector(".quiz").style.display = "flex";
    document.querySelector(".hidden").style.display = "none";
    localStorage.setItem('quizAffiche', 'false');
}

function questionSuivante() {    
    clearInterval(timer);
    questionActuelle++;
    if (questionActuelle < nombreQuestionsTotal) {
        afficherQuestion();
   
        sauvegarderEtatQuiz();
    } else {
        terminerQuiz();
    }
}

function verifierEtatQuiz() {
    const quizAffiche = localStorage.getItem('quizAffiche');
    
    if (quizAffiche === 'true') {
        const savedState = localStorage.getItem('quizState');
        if (savedState) {
            chargerEtatQuiz(); 
            document.querySelector(".quiz").style.display = "none";
            document.querySelector(".hidden").style.display = "block";
        } else {
            document.querySelector(".quiz").style.display = "flex";
            document.querySelector(".hidden").style.display = "none";
            initialiserQuiz();
        }
    } else {
        document.querySelector(".quiz").style.display = "flex";
        document.querySelector(".hidden").style.display = "none";
    }
}

function afficherNiveau(score) {
    const niveau = determinerNiveau(score);
    const niveauElement = document.querySelector('.niveau');
   
}

function afficherbadrep() {
    const resultElement = document.querySelector('.resultats');
    resultElement.innerHTML = ''; 
    let resultHTML = "<h3>Récapitulatif Détaillé</h3>";
    
    resultHTML += '<div class="recap-container">';
    
    for (let i = 0; i < questionsRestantes.length; i++) {
        const userAnswer = useranswers[i];
        const isCorrect = userAnswer === questionsRestantes[i].answer;
        
        resultHTML += `
            <div class="recap-item ${isCorrect ? 'correct-recap' : 'incorrect-recap'}">
                <div class="recap-question">
                    <strong>Q${i + 1}:</strong> ${questionsRestantes[i].question}
                </div>
                <div class="recap-details">
                    <div class="recap-user-answer">
                        Votre réponse : ${questionsRestantes[i].options[userAnswer]}
                    </div>
                    <div class="recap-correct-answer">
                        Réponse correcte : ${questionsRestantes[i].options[questionsRestantes[i].answer]}
                    </div>
                    <div class="recap-result">
                        ${isCorrect ? 'Correct ' : 'Incorrect '}
                    </div>
                </div>
            </div>
        `;
    }
    
    resultHTML += '</div>';
    
    resultElement.innerHTML = resultHTML;
}

function startTimer() {
    let timerDisplay = document.querySelector('.timer-display');
    if (!timerDisplay) {
        timerDisplay = document.createElement('div');
        timerDisplay.className = 'timer-display';
        document.querySelector('.timer-container').appendChild(timerDisplay);
    }

    timer = setInterval(() => {
        timerDisplay.textContent = `Temps restant: ${timeLeft}s`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            const repElements = document.querySelectorAll('.rep');
            const question = questionsRestantes[questionActuelle];

            repElements.forEach((element, index) => {
                element.style.pointerEvents = 'none';
                if (index === question.answer) {
                    element.style.backgroundColor = 'rgb(0, 255, 0)';
                } else {
                    element.style.backgroundColor = 'rgb(255, 0, 0)';
                }
            });
            setTimeout(() => {
                questionSuivante();
            }, 1000);
        }
    }, 1000);
}


document.addEventListener('DOMContentLoaded', function() {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
        chargerEtatQuiz();
        document.querySelector(".quiz").style.display = "none";
        document.querySelector(".hidden").style.display = "block";
    }

    verifierEtatQuiz();


    document.querySelector('.btnredemare').addEventListener('click', function() {
        initialiserQuiz();
    });
    document.querySelector(".btn").addEventListener("click", afficher);
    document.querySelector(".btn2").addEventListener("click", terminer);
    document.querySelector(".btnSuivant").addEventListener("click", questionSuivante);

    const repElements = document.querySelectorAll('.rep');
    repElements.forEach((element, index) => {
        element.addEventListener('click', () => verifierReponse(index));
    });
    document.querySelector('.btnAfficherRecap').addEventListener('click', afficherbadrep);

    afficherDernierScore();
    verifierEtatQuiz(); 
    afficherDernierScore();
});




document.querySelector('.btnGenererPDF').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;


    const doc = new jsPDF();

    if (useranswers.length === 0) {
        doc.setFontSize(16);
        doc.setTextColor(255, 0, 0); 
        doc.text('Aucun quiz n\'a été joué.', 10, 10);
        doc.save('recap_quiz.pdf');
        return; 
    }


    const niveau = determinerNiveau(score);

  
    doc.setFontSize(20);
    doc.text('Récapitulatif du Quiz', 10, 10);


    doc.setFontSize(14);
    doc.text(`Votre score: ${score} sur ${nombreQuestionsTotal}`, 10, 20);

    doc.text(`Votre niveau: ${niveau}`, 10, 25); 


    let y = 40; 
 
    for (let i = 0; i < questionsRestantes.length; i++) {
        const userAnswer = useranswers[i];
        const isCorrect = userAnswer === questionsRestantes[i].answer;

        doc.text(`Q${i + 1}: ${questionsRestantes[i].question}`, 10, y);
        doc.text(`Votre réponse: ${questionsRestantes[i].options[userAnswer]}`, 10, y + 5);
        doc.text(`Réponse correcte: ${questionsRestantes[i].options[questionsRestantes[i].answer]}`, 10, y + 10);
        doc.text(isCorrect ? 'Résultat: Correct' : 'Résultat: Incorrect', 10, y + 15);
        y += 25; 
    }

 
    doc.save('recap_quiz.pdf');
});