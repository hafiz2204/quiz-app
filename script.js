const quiz = [
    {
        question: "What is HTML?",
        options: ["Programming Language", "Markup Language", "Database", "Browser"],
        answer: 1
    },
    {
        question: "What is CSS used for?",
        options: ["Logic", "Database", "Styling", "Server"],
        answer: 2
    },
    {
        question: "Which language runs in browser?",
        options: ["Python", "Java", "C", "JavaScript"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = quiz[currentQuestion].question;
    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).innerText = quiz[currentQuestion].options[i];
    }
    document.getElementById("result").innerText = "";
}

function checkAnswer(selected) {
    if (selected === quiz[currentQuestion].answer) {
        document.getElementById("result").innerText = "Correct!";
        score++;
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML =
            "<h2>Quiz Finished</h2><p>Your Score: " + score + "</p>";
    }
}

loadQuestion();