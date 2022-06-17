'use strict';

const generateRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
};

const displayHighscore = function (highscore) {
    document.querySelector('.highscore').textContent = highscore;
};

let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // Where there is no input
    if (!guess) {
        displayMessage('🛑 No number!');

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        displayNumber(secretNumber);

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            displayHighscore(highscore);
        }
        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
            );
            score--;
            displayScore(score);
        } else {
            displayMessage('💥 You lost the game!');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = generateRandomNumber();
    score = 20;

    displayMessage('Start guessing...');
    displayNumber('?');
    displayScore(score);
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
