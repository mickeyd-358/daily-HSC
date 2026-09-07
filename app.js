// File for main app
const questionElement = document.getElementById("question");
const subjectElement = document.getElementById("subject");
const difficultyElement = document.getElementById("difficulty");

const today = new Date();

const dayNumber = Math.floor(
    today.getTime() / (1000 * 60 * 60 * 24)
);

const questionIndex = dayNumber % questions.length;

const todayQuestion = questions[questionIndex];

subjectElement.textContent = todayQuestion.subject.toUpperCase();

difficultyElement.textContent =
    todayQuestion.difficulty.toUpperCase();

questionElement.textContent =
    todayQuestion.question;


const revealButton = document.getElementById("reveal-button");
const answerContainer = document.getElementById("answer-container");
const answerElement = document.getElementById("answer");

revealButton.addEventListener("click", () => {

    answerElement.textContent = todayQuestion.answer;

    answerContainer.classList.remove("hidden");

    revealButton.textContent = "Answer Revealed";
});