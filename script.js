game();

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let roundResult = playRound();
        console.log(roundResult);

        if (roundResult.charAt(4) === 'W') {
            roundResult = 'Player Wins';
        } else if (roundResult.charAt(4) === 'L') {
            roundResult = 'Computer Wins';
        }

        if (roundResult === 'Player Wins') {
            playerScore++;
        } else if (roundResult === 'Computer Wins') {
            computerScore++;
        }

        if (computerScore >= 3 || playerScore >= 3) {
            break;
        }
    }

    if (playerScore > computerScore) {
        console.log('Player Wins Game');
        return 'Player Wins Game';
    } else if (playerScore < computerScore) {
        console.log('Computer Wins Game');
        return 'Computer Wins Game';
    } else {
        console.log('Tie Game');
        return 'Tie Game';
    }
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let result = '';
    if (playerChoice === computerChoice) {
        result = 'Tie';
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

function getPlayerChoice() {
    let choice = prompt('Type Rock, Paper, or Scissors.');

    if (choice.toUpperCase() === "ROCK" 
    || choice.toUpperCase() === "PAPER" 
    || choice.toUpperCase() === "SCISSORS" ) {
        return choice.toUpperCase();
    } else {
        alert('Error. Please try again.');
        getPlayerChoice();
    }
}