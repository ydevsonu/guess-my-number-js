'use strict';

// Game state
let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

// Utility functions
function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function showMessage(text) {
  document.querySelector('.message').textContent = text;
}

function updateScore(value) {
  score = value;
  document.querySelector('.score').textContent = score;
}

// Check button logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    showMessage('⛔️ Please enter a number');
    return;
  }

  if (guess === secretNumber) {
    showMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    return;
  }

  if (score > 1) {
    showMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
    updateScore(score - 1);
  } else {
    showMessage('💥 Game Over!');
    updateScore(0);
  }
});

// Reset game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateSecretNumber();

  showMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
