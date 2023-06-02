game();

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tieRecord = 0;
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
            
        } else if (roundResult === 'Computer Wins') {
            computerScore++;
            let computerScoreDisplay = document.querySelector('#computerScore');
            computerScoreDisplay.innerHTML = "Computer: " + computerScore;
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