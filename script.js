let playerScore = 0;
let computerScore = 0;
let tieRecord = 0;

game();

function game() {
    
    let roundResult = '';

    const rock = document.querySelector('#rock');
        
    rock.addEventListener('click', () => {
        roundResult = playRound(rock.id);
        console.log(roundResult);

        

        if (roundResult.charAt(4) === 'W') {
            roundResult = 'Player Wins';
        } else if (roundResult.charAt(4) === 'L') {
            roundResult = 'Computer Wins';
        } else {
            roundResult = 'Tie';
        }

        

        if (roundResult === 'Player Wins') {
            playerScore++;
            console.log(playerScore);
            let playerScoreDisplay = document.querySelector('#playerScore');
            playerScoreDisplay.innerHTML = "Player: " + playerScore;
            checkScore();
        } else if (roundResult === 'Computer Wins') {
            computerScore++;
            let computerScoreDisplay = document.querySelector('#computerScore');
            computerScoreDisplay.innerHTML = "Computer: " + computerScore;
            checkScore();
        } else if (roundResult === 'Tie') {
            tieRecord++;
            let tieRecordDisplay = document.querySelector('#tieRecord');
            tieRecordDisplay.innerHTML = "Rounds Tied: " + tieRecord;
        }
    });
}

function playRound(elementId) {
    let playerChoice = elementId.toUpperCase();
    let computerChoice = getComputerChoice();
    let result = '';
    if (playerChoice === computerChoice) {
        return result = 'Tie';
    } else if (playerChoice === 'ROCK') {
        if (computerChoice === 'PAPER') {
            result = 'You Lose! Paper beats Rock';
        } else {
            result = 'You Win! Rock beats Scissors';
        }
    } else if (playerChoice === 'PAPER') {
        if (computerChoice === 'SCISSORS') {
            result = 'You Lose! Scissors beats Paper';
        } else {
            result = 'You Win! Paper beats Rock';
        }
    } else if (playerChoice === 'SCISSORS') {
        if (computerChoice === 'ROCK') {
            result = 'You Lose! Rock beats Scissors';
        } else {
            result = 'You Win! Scissors beats Paper';
        }
    }

    return result;

    
}


function getComputerChoice() {
    let choiceValue = Math.floor(Math.random() * 100);
    if (choiceValue <= 33) {
        return 'ROCK';
    } else if (choiceValue <= 66) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

function alertWin (score) {
    if (score === 5) {
        if (score === playerScore) {
            alert("Player Wins!");
        } else if (score === computerScore) {
            alert("Computer Wins!");
        }
    }
} 

function checkScore() {
    if (playerScore >= 5) {
      const modal = document.getElementById("myModal");
      const modalMessage = document.getElementById("modalMessage");
      modalMessage.textContent = "Congratulations! You reached 5 points, and won the game.";
      modal.style.display = "block";
    } else if (computerScore >= 5) {
      const modal = document.getElementById("myModal");
      const modalMessage = document.getElementById("modalMessage");
      modalMessage.textContent = "Gamer Over! The computer reached 5 points!";
      modal.style.display = "block";
    }
  }
  
  document.getElementById("openModal").addEventListener("click", checkScore);
  document.getElementById("restartButton").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
    restartGame();
  });

  function restartGame() {
    playerScore = 0;
    computerScore = 0;
    tieRecord = 0;
    let playerScoreDisplay = document.querySelector('#playerScore');
    playerScoreDisplay.innerHTML = "Player: " + playerScore;
    let computerScoreDisplay = document.querySelector('#computerScore');
    computerScoreDisplay.innerHTML = "Computer: " + computerScore;
    let tieRecordDisplay = document.querySelector('#tieRecord');
    tieRecordDisplay.innerHTML = "Rounds Tied: " + tieRecord;
  }