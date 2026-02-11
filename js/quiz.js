if (localStorage.getItem("loggedIn") !== "true") {
  location.href = "login.html";
}

const scoreEl = document.getElementById("scoreLive");

const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");
const level = params.get("level");

const quizQuestions = questions[subject][level];

let index = 0, score = 0, time = 20, timer;

const q = document.getElementById("question");
const opts = document.querySelectorAll(".option");
const timerEl = document.getElementById("timer");
const prog = document.getElementById("progress");
const fill = document.getElementById("progressFill");

loadQuestion();
startTimer();

function loadQuestion() {
  const current = quizQuestions[index];
  q.innerText = current.question;

  opts.forEach((btn, i) => {
    btn.innerText = current.options[i];
    btn.onclick = () => checkAnswer(i);
  });

  prog.innerText = `${index + 1} / ${quizQuestions.length}`;
  fill.style.width = ((index + 1) / quizQuestions.length) * 100 + "%";
}

function checkAnswer(i) {
  opts.forEach(btn => btn.classList.add("disabled"));

  if (i === quizQuestions[index].answer) {
    opts[i].classList.add("correct");
    score++;
  } else {
    opts[i].classList.add("wrong");
    opts[quizQuestions[index].answer].classList.add("correct");
  }

  scoreEl.innerText = `Score: ${score}`;

  setTimeout(() => {
    opts.forEach(btn => {
      btn.classList.remove("correct", "wrong", "disabled");
    });
    next();
  }, 1000);
}



function next() {
  index++;
  resetTimer();

  if (index < quizQuestions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("score", score);
    localStorage.setItem("total", quizQuestions.length);
    location.href = "result.html";
  }
}

function startTimer() {
  timer = setInterval(() => {
    time--;
    timerEl.innerText = time;
    if (time === 0) next();
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  time = 20;
  startTimer();
}

btn.onclick = () => checkAnswer(i);