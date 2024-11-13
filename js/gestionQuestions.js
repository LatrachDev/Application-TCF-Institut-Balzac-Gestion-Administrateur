const questionForm = document.getElementById('questionForm');
const questionText = document.getElementById('questionText');
const answerOptions = document.getElementById('answerOptions');
const correctAnswer = document.getElementById('correctAnswer');
const level = document.getElementById('level');
const category = document.getElementById('category');
const questionsContainer = document.getElementById('questionsContainer');

// Load questions from localStorage when the page loads
document.addEventListener('DOMContentLoaded', displayQuestions);

// Submit form event to add or update question
questionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addOrUpdateQuestion();
  displayQuestions();
  questionForm.reset();
});

function addOrUpdateQuestion() {
    const questionData = {
        id: questionForm.dataset.editId ? Number(questionForm.dataset.editId) : Date.now(), // Use editId if available
        text: questionText.value,
        options: answerOptions.value.split(',').map(opt => opt.trim()),
        correct: correctAnswer.value,
        level: level.value,
        category: category.value
    };
    
  let questions = JSON.parse(localStorage.getItem('questions')) || [];
  
  // If editing an existing question, replace it
  const questionIndex = questions.findIndex(q => q.id === questionData.id);
  if (questionIndex !== -1) {
    questions[questionIndex] = questionData;
  } else {
    questions.push(questionData);
  }

  localStorage.setItem('questions', JSON.stringify(questions));

  delete questionForm.dataset.editId;
}

// Function to display questions from localStorage
function displayQuestions() {
  questionsContainer.innerHTML = ''; // Clear existing content
  const questions = JSON.parse(localStorage.getItem('questions')) || [];

  questions.forEach((question) => {
    const questionElement = document.createElement('div');
    questionElement.className = 'bg-gray-100 p-4 mb-4 rounded-lg shadow';

    questionElement.innerHTML = `
      <p><strong>Question:</strong> ${question.text}</p>
      <p><strong>Options:</strong> ${question.options.join(', ')}</p>
      <p><strong>Correct Answer:</strong> ${question.correct}</p>
      <p><strong>Level:</strong> ${question.level}</p>
      <p><strong>Category:</strong> ${question.category}</p>
      <button class="editBtn mt-5 bg-blue-500 text-white px-3 py-1 rounded mr-2" data-id="${question.id}">Edit</button>
      <button class="deleteBtn mt-5 bg-red-500 text-white px-3 py-1 rounded" data-id="${question.id}">Delete</button>
    `;
    questionsContainer.appendChild(questionElement);
  });

  // Attach edit and delete event listeners
  document.querySelectorAll('.editBtn').forEach(btn => {
    btn.addEventListener('click', editQuestion);
  });
  document.querySelectorAll('.deleteBtn').forEach(btn => {
    btn.addEventListener('click', deleteQuestion);
  });
}

// Function to edit a question
function editQuestion(event) {
  const questionId = Number(event.target.dataset.id);
  const questions = JSON.parse(localStorage.getItem('questions')) || [];
  const question = questions.find(q => q.id === questionId);

  if (question) {
    questionText.value = question.text;
    answerOptions.value = question.options.join(', ');
    correctAnswer.value = question.correct;
    level.value = question.level;
    category.value = question.category;

    // Temporarily save the question ID to reuse it for updating
    questionForm.dataset.editId = question.id;
  }
}

// Function to delete a question
function deleteQuestion(event) {
  const questionId = Number(event.target.dataset.id);
  let questions = JSON.parse(localStorage.getItem('questions')) || [];

  questions = questions.filter(q => q.id !== questionId);
  localStorage.setItem('questions', JSON.stringify(questions));
  displayQuestions();
}
