const snippets = [
  'for (let i = 0; i < 10; i++) { console.log(i); }',
  'def greet(name): return f"Hello, {name}"',
  '<div class="card">Hello World</div>',
  'git commit -m "Initial commit"',
  'const sum = (a, b) => a + b;'
];

let currentSnippet = '';
let startTime = 0;

const snippetEl = document.getElementById('code-snippet');
const inputEl = document.getElementById('user-input');
const timeEl = document.getElementById('time');
const accuracyEl = document.getElementById('accuracy');
const restartBtn = document.getElementById('restart');

function loadNewSnippet() {
  currentSnippet = snippets[Math.floor(Math.random() * snippets.length)];
  snippetEl.textContent = currentSnippet;
  inputEl.value = '';
  timeEl.textContent = '0.00s';
  accuracyEl.textContent = '0%';
  startTime = 0;
}

function calculateAccuracy(input, target) {
  let correct = 0;
  for (let i = 0; i < Math.min(input.length, target.length); i++) {
    if (input[i] === target[i]) correct++;
  }
  return ((correct / target.length) * 100).toFixed(2);
}

inputEl.addEventListener('input', () => {
  if (startTime === 0) startTime = new Date().getTime();

  const elapsed = (new Date().getTime() - startTime) / 1000;
  timeEl.textContent = elapsed.toFixed(2) + 's';

  const userInput = inputEl.value;
  const acc = calculateAccuracy(userInput, currentSnippet);
  accuracyEl.textContent = acc + '%';
});

restartBtn.addEventListener('click', loadNewSnippet);

// Init on load
loadNewSnippet();
