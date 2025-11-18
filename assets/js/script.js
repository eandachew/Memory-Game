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

  /* Initialize game function */
     function initGame() {
    gameBoard.innerHTML = '';
    moves = 0; timer = 0; gameStarted = false; matchedPairs = 0;
    movesCount.textContent = moves; timeElement.textContent = timer;
    clearInterval(timerInterval);

    if (window.innerWidth <= 480) {
      totalPairs = 6; gameBoard.className = 'game-board mobile-layout';
    } else if (window.innerWidth <= 768) {
      totalPairs = 8; gameBoard.className = 'game-board tablet-layout';
    } else {
      totalPairs = 12; gameBoard.className = 'game-board desktop-layout';
    }

    let cards = [];
    for (let i = 0; i < totalPairs; i++) {
      cards.push(cardSymbols[i]);
      cards.push(cardSymbols[i]);
    }
    cards = shuffleArray(cards);

    cards.forEach(symbol => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">?</div>
          <div class="card-back">${symbol}</div>
        </div>`;
      card.addEventListener('click', flipCard);
      gameBoard.appendChild(card);
    });
  }