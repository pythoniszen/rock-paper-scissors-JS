let playerScore = 0;
let computerScore = 0;
let tieRecord = 0;

game();

// Triggers function chain to run the game loop.
function game() {
  const options = [
    { id: 'rock' },
    { id: 'paper' },
    { id: 'scissors' }
  ];

  options.forEach(option => {
    const button = document.querySelector(`#${option.id}`);
    button.addEventListener('click', () => {
      computeRoundResult(button);
    });
  });
}

// Helper functions:

// Takes in the button clicked and passes it to the playRound function.
// Then, it takes the result of the playRound function and displays it on the screen.
function computeRoundResult(buttonClicked) {
  let roundResult = playRound(buttonClicked.id);

  if (roundResult.charAt(4) === 'W') {
    roundResult = 'Player Wins';
    playerScore++;
  } else if (roundResult.charAt(4) === 'L') {
    roundResult = 'Computer Wins';
    computerScore++;
  } else {
    roundResult = 'Tie';
    tieRecord++;
  }

  updateScoreDisplay();
  checkScore();
}

// Computes choice for computer and compares it to the player's choice.
function playRound(elementId) {
  const playerChoice = elementId.toUpperCase();
  const computerChoice = getComputerChoice();
  let result = '';

  if (playerChoice === computerChoice) {
    result = 'Tie';
  } else if (playerChoice === 'ROCK') {
    result = computerChoice === 'PAPER' ? 'You Lose! Paper beats Rock' : 'You Win! Rock beats Scissors';
  } else if (playerChoice === 'PAPER') {
    result = computerChoice === 'SCISSORS' ? 'You Lose! Scissors beats Paper' : 'You Win! Paper beats Rock';
  } else if (playerChoice === 'SCISSORS') {
    result = computerChoice === 'ROCK' ? 'You Lose! Rock beats Scissors' : 'You Win! Scissors beats Paper';
  }

  return result;
}

function getComputerChoice() {
  const choiceValue = Math.floor(Math.random() * 100);

  if (choiceValue <= 33) {
    return 'ROCK';
  } else if (choiceValue <= 66) {
    return 'PAPER';
  } else {
    return 'SCISSORS';
  }
}

function updateScoreDisplay() {
  const playerScoreDisplay = document.querySelector('#playerScore');
  playerScoreDisplay.innerHTML = `Player: ${playerScore}`;

  const computerScoreDisplay = document.querySelector('#computerScore');
  computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;

  const tieRecordDisplay = document.querySelector('#tieRecord');
  tieRecordDisplay.innerHTML = `Rounds Tied: ${tieRecord}`;
}

// Checks the score to see if either player has reached 5 points.
// If so, it displays a modal with the winner and a restart button.
function checkScore() {
  if (playerScore >= 5 || computerScore >= 5) {
    const modal = document.getElementById('myModal');
    const modalMessage = document.getElementById('modalMessage');

    if (playerScore >= 5) {
      modalMessage.textContent = 'Congratulations! You reached 5 points and won the game.';
    } else {
      modalMessage.textContent = 'Game Over! The computer reached 5 points!';
    }

    modal.style.display = 'block';
  }
}

document.getElementById('restartButton').addEventListener('click', () => {
  document.getElementById('myModal').style.display = 'none';
  restartGame();
});

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  tieRecord = 0;
  updateScoreDisplay();
}
