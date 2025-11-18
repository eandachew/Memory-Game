/* Basic setup and variables */

document.addEventListener('DOMContentLoaded', () => {
  let moves = 0, timer = 0, gameStarted = false, timerInterval;
  let firstCard = null, secondCard = null, lockBoard = false, matchedPairs = 0, totalPairs;

  const gameBoard = document.getElementById('game-board');
  const movesCount = document.getElementById('moves-count');
  const timeElement = document.getElementById('time');
  const restartButton = document.getElementById('restart');
  const winMessage = document.getElementById('win-message');
  const finalMoves = document.getElementById('final-moves');
  const finalTime = document.getElementById('final-time');
  const playAgainButton = document.getElementById('play-again');

  const cardSymbols = ['🍎','🍌','🍇','🍊','🍓','🍉','🍒','🍐','🥝','🍑','🥥','🍋'];