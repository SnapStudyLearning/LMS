
const questions = [
  { word: "astonish", def: "to surprise greatly", correct: "to surprise greatly", wrong: ["to forget", "to fear", "to whisper"] },
  { word: "brilliant", def: "very bright or smart", correct: "very bright or smart", wrong: ["dark", "mean", "small"] }
];
let index = 0;

function loadQuestion() {
  const q = questions[index];
  document.getElementById('question').textContent = `What does "${q.word}" mean?`;
  const opts = shuffle([q.correct, ...q.wrong]);
  document.getElementById('options').innerHTML = "";
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt === q.correct);
    document.getElementById('options').appendChild(btn);
  });
}

function checkAnswer(isCorrect) {
  document.getElementById('feedback').textContent = isCorrect ? "✅ Correct!" : "❌ Try again.";
  if (isCorrect) index++;
}

function nextQuestion() {
  if (index < questions.length) loadQuestion();
  else document.getElementById('question').textContent = "🎉 Quiz complete!";
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

window.onload = loadQuestion;
