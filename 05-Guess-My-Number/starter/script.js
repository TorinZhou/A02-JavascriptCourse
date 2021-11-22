'use strict';
// // look what I get here  console.log(document.querySelector('.message'));
// // console.log(document.querySelector('.message'));
// // or document.querySelector('#message');

// console.log(document.querySelector('.message').textContent);
// // we select the element, and then from that element we select the property. which is textcontent.

// document.querySelector('.message').textContent = 'Im HERE !!';
// // I change the content!

// document.querySelector('.number').textContent = '999';

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------

// addEventLister is a method, so we need to and prerensenses ().
// First type in the type of the event.
// Sencondly, tell the listener What to do.
// const checkLogical = function () {

// };
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const scoreArray = [];

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = ' 😅 No Number!!!';
  } else {
    if (score > 1) {
      compare(guess, secretNumber);
    } else {
      document.querySelector('.message').textContent = 'YOU DIED!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

function compare(a, b) {
  if (a === b) {
    document.querySelector('.message').textContent = 'COOL!!';
    highScore();
    callWinnerCSS();
  } else if (a < b) {
    document.querySelector('.message').textContent = 'Too low!';
    deScore();
  } else {
    document.querySelector('.message').textContent = 'Too high!';
    deScore();
  }
}

function deScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function highScore() {
  scoreArray.push(score);
  document.querySelector('.highscore').textContent = getHigh();
  console.log(scoreArray);
}
function getHigh() {
  let a = scoreArray[0];
  for (let i = 1; i < scoreArray.length; i++) {
    if (a < scoreArray[i]) {
      a = scoreArray[i];
    }
  }
  return a;
}

function callWinnerCSS() {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;
}
