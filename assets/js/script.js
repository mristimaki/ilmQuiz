const { question } = require("readline-sync");

// Declaring constants for DOM elements ---------------------------------------------------
const elements = {
    // Sections
    startSection: document.getElementById('start'),
    quizSection: document.getElementById('quiz'),
    resultSection: document.getElementById('result'),

    // Buttons
    startButton: document.getElementById('start-button'),
    playAgainButton: document.getElementById('play-again'),

    // Quiz-Elements
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options'),

    // Explanation-Elements
    explanationBox: document.getElementById('explanation-box'),
    explanationText: document.getElementById('explanation-text'),

    // Score-Elements
    currentScore: document.getElementById('current-score'),
    finalScore: document.getElementById('finai-score'),
    finalTotal: document.getElementById('final-total'),

    // Other
    currentQuestion: document.getElementById('current-question'),
    totalQustions: document.getElementById('total-questions'),
    scoreDisplay: document.getElementById('score-display'),
    resultMessage: document.getElementById('result-message')
};

// QUIZ DATA - Questions & Answers -------------------------------------------------------
const quizData = [
    {
        question: '1. Ordet "Al-Yaom" (dag) nämns i Koranen..',
        options: [
            {option: '1000 gånger', answer: false},
            {option: '365 gånger', answer: true},
            {option: '500 gånger', answer: false}
        ],
        explanation: 'Ordet "dag" i singular förekommer 365 gånger - samma antal som dagar på ett år!'
    },       
    {
        question: '2. Ordet "Shahr" (månad) nämns i Koranen..',
        options: [ 
            {option: '33 gånger', answer: false},
            {option: '99 gånger', answer: false},
            {option: '12 gånger', answer: true}
        ],
        explanation: 'Ordet "månad" förekommer exakt 12 gånger - samma antal som månader på ett år!'
    },
    {
        question: '3. De korrekta stadierna för embryots utveckling nämndes först..',
        options: [ 
            {option: 'Av Hans Adolf Eduard Driesch 1890', answer: false},
            {option: 'I Koranen för över 1400 år sedan (surah 23:12-14)', answer: true},
            {option: 'Av Frances Maitland Balfour 1880', answer: false}
        ],
        explanation: 'Koranen beskriver embryots utveckling i detalj för över 1400 år sedan, långt innan modern vetenskap kunde bekräfta dessa stadier!'
    },
    {
        question: '4. Allah nämner män och kvinnor i Koranen..',
        options: [
            {option: 'Män mer än kvinnor', answer: false},
            {option: 'Kvinnor mer än män', answer: false},
            {option: 'Exakt lika mycket', answer: true}
        ],
        explanation: 'Män och kvinnor nämns exakt lika många gånger i Koranen - en matematisk balans som visar jämlikhet!'
    },
    {
        question: '5. Teorin om universums expansion nämndes först..',
        options: [
            {option: 'Av Edwin Hubble 1929', answer: false},
            {option: 'Av Georges Lemaître 1920', answer: false},
            {option: 'I Koranen för över 1400 år sedan (surah 51:47)', answer: true}
        ],
        explanation: 'Koranen beskriver hur universum expanderar över 1300 år innan modern astronomi upptäckte det!'
    },
    {
        question: '6. Ordet "Islam" betyder..',
        options: [
            {option: 'Den som frivilligt underkastar sig (Gud)', answer: true},
            {option: 'Att sträva', answer: false},
            {option: 'Profeten Muhammeds (ﷺ) anhängare', answer: false}
        ],
        explanation: 'Islam betyder "frivillig underkastelse till Gud" - det handlar om att finna frid genom att följa Guds vilja.'
    },
    {
        question: '7. Ordet "Jihad" betyder..',
        options: [
            {option: 'Heligt krig', answer: false},
            {option: 'Att "kämpa" eller "sträva"', answer: true},
            {option: 'Martyrskap', answer: false}
        ],
        explanation: 'Jihad betyder att sträva eller kämpa - oftast avser det den inre kampen att bli en bättre människa!'
    },
    {
        question: '8. Antalet profeter som nämns vid namn i Koranen är..',
        options: [
            {option: '25', answer: true},
            {option: '33', answer: false},
            {option: '19', answer: false}
        ],
        explanation: 'Exakt 25 profeter nämns vid namn i Koranen, bland dem Adam, Noa, Abraham, Moses, Jesus och Muhammed (frid vare med dem alla).'
    },
    {
        question: '9. Ängeln som ska blåsa i hornet för att signalera Domens dag är..',
        options: [
            {option: 'Israfil', answer: true},
            {option: 'Mikael', answer: false},
            {option: 'Jibril', answer: false}
        ],
        explanation: 'Ängeln Israfil har fått uppdraget att blåsa i hornet (Sur) när Domens dag kommer.'
    },
    {
        question: '10. En muslim ska älska (efter Allah och Hans budbärare ﷺ)..',
        options: [
            {option: 'Sin mor tre gånger mer än sin far', answer: true},
            {option: 'Sin far tre gånger mer än sin mor', answer: false},
            {option: 'Sin far och mor lika mycket', answer: false}
        ],
        explanation: 'Profeten Muhammed (ﷺ) sade att modern ska hedras tre gånger mer än fadern - en påminnelse om moderns uppoffringar och värde i Islam!'
    }
];

// STATE -----------------------------------------------------------------------
let currentQuestionIndex = 0;
let score = 0;

// INIT - When page load ---------------------------------------------------------
function init() {
    // Puts total questions in html
    elements.totalQustions.textContent = quizData.length;
    elements.finalTotal.textContent = quizData.length;

    // Event listeners
    elements.startButton.addEventListener('click', startQuiz);
    elements.playAgainButton.addEventListener('click', resetQuiz);

    // Only shows start section when app starts
    showSection('start');
}

// SECTION HANDELERS
function showSection(sectionName) {
    // List of all sections
    const sections = ['start', 'quiz', 'result'];

    // Go trough each section
    sections.forEach(section => {
        const element = document.getElementById(section);

        if (section === sectionName) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });

    // Show/Hide scores
    if (sectionName === 'quiz') {
        elements.scoreDisplay.style.display = 'block';
    } else {
        elements.scoreDisplay.style.display = 'none';
    }
}

// START QUIZ ---------------------------------------------------------
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    updateScore();

    showSection('quiz');

    // Show first question
    displayQuestion();
}

// SHOW QUESTIONS ------------------------------------------------------
function displayQuestion() {
    // Get the current question from array
    const currentQuestion = quizData[currentQuestionIndex];

    // Update question number
    elements.currentQuestion.textContent = currentQuestionIndex + 1;

    // Show question
    elements.questionText.textContent = currentQuestion.question;

    // Remove answers from before
    elements.optionsContainer.innerHTML = '';

    // Create button for each choice
    currentQuestion.options.forEach((optionObj, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = optionObj.option;

        // click function
        button.addEventListener('click', () => {
            selectAnswer(optionObj.answer, button);
        });

        // add button to HTML
        elements.optionsContainer.appendChild(button);
    });

    // Hide explanation when new question
    hideExplanation();
}

// HANDLE ANSWERS ---------------------------------------------------
function selectAnswer(isCorrect, buttonElement) {
    // Get answer buttons
    const allButtons = elements.optionsContainer.querySelectorAll('.option-btn');

    // Inactivate all buttons (so that you can only click once)
    allButtons.forEach(btn => {
        btn.disabled = true;
    });

    // Check if the answer is right or wrong
    if (isCorrect) {
        // right answer!
        buttonElement.classList.add('correct'); // Makes button green
        score++; // Increment score
        updateScore(); // Update score on screen
    } else {
        // wrong answer!
        buttonElement.classList.add('incorrect'); // Makes button red
        highlightCorrectAnswer(); // Show which answer was right
    }

    // Show explanation
    showExplanation();

    // Wait 2.5 sec so that the user has time to read the explanation, then goes to next question
    setTimeout(() => {
        // Hide explanation before next question
        hideExplanation();

        // Check if there's any questions left
        if (currentQuestionIndex < quizData.length - 1) {
            // There's more questions left: show next
            currentQuestionIndex++;
            displayQuestion();
        } else {
            // No more questions: show result
            showResults();
        }
    }, 2500);
}

// HIGHLIGHT RIGHT ANSWER (if user chooses the wrong answer)
function highlightCorrectAnswer() {
    // Get actual question
    const currentQuestion = quizData[currentQuestionIndex];

    // Get all choice buttons
    const allButtons = elements.optionsContainer.querySelectorAll('.option-btn');

    // Go through each button
    allButtons.forEach((btn, index) => {
        // Check if answer is correct
        if (currentQuestion.options[index].answer) {
            btn.classList.add('correct'); // Makes button green
        }
    });
}

// SHOW EXPLANATION ------------------------------------------------------
function showExplanation() {
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Put explanation text
    elements.explanationText.textContent = currentQuestion.explanation;
    
    // Show explanation div
    elements.explanationBox.classList.remove('hidden');
}

// HIDE EXPLANATION ------------------------------------------------------
function hideExplanation() {
    elements.explanationBox.classList.add('hidden');
}

// UPDATE SCORE ----------------------------------------------------------
function updateScore() {
    elements.currentScore.textContent = score;
}

// SHOW RESULT ----------------------------------------------------------
function showResults() {
    // Show final score
    elements.finalScore.textContent = score;
    
    // Count percent correct
    const percentage = (score / quizData.length) * 100;
    
    // Choose message depending on score
    let message = '';
    
    if (percentage === 100) {
        message = 'Mashallah! Perfekt poäng! Du har verkligen bra kunskap! 🌟';
    } else if (percentage >= 80) {
        message = 'Utmärkt! Du har mycket god kunskap om Islam! 👏';
    } else if (percentage >= 60) {
        message = 'Bra jobbat! Du har god grundkunskap! 👍';
    } else if (percentage >= 40) {
        message = 'Inte illa! Fortsätt lära dig så blir det ännu bättre! 💪';
    } else {
        message: 'Fortsätt lära dig, det finns så mycket att upptäcka! 📚';
    }
    
    // Show message
    elements.resultMessage.textContent = message;
    
    // Change to result page
    showSection('result');
}

// RESET QUIZ ----------------------------------------------------------------
function resetQuiz() {
    // Nollställ allt
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    
    // Gå tillbaka till startsidan
    showSection('start');
}

// START APP ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', init);