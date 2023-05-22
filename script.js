game();

function game() {
    let playerScore = 0;
    let computerScore = 0;

    // Loop lets you play a limited amount of rounds
    for (let i = 0; i < 1; i++) {
        let roundResult = '';

        const rock = document.querySelector('#rock')
        console.log(rock.id)
        
        rock.addEventListener('click', () => {
            roundResult = playRound(rock.id);
            console.log(roundResult);

        });


        if (roundResult.charAt(4) === 'W') {
            roundResult = 'Player Wins';
        } else if (roundResult.charAt(4) === 'L') {
            roundResult = 'Computer Wins';
        } else {
            roundResult = 'Tie';
        }

        if (roundResult === 'Player Wins') {
            playerScore++;
        } else if (roundResult === 'Computer Wins') {
            computerScore++;
        }

        // Lets game play until someone wins 3 rounds

        if (computerScore >= 1 || playerScore >= 1) {
            break;
        }
    }

    // Displays the winner of the game

    //if (playerScore > computerScore) {
        //console.log('Player Wins Game');
      //  return 'Player Wins Game';
    //} else if (playerScore < computerScore) {
        //console.log('Computer Wins Game');
      //  return 'Computer Wins Game';
    //} else {
      //  console.log('Tie Game');
    //    return 'Tie Game';
    //}
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

// function no longer needed
//function to edit
// switch function from a prompt to an event listener for a click event on a button
// if rock is clicked set variable choice to rock and same for paper and scissors
function getPlayerChoice() {
    let choice = '';
    while (choice !== 'ROCK' || choice !== 'PAPER' || choice !== 'SCISSORS') {
        
        document.querySelector('#rock').addEventListener('click', () => {
            choice = 'ROCK';
        });

        if (choice === "ROCK" 
        || choice === "PAPER" 
        || choice === "SCISSORS" ) {
            console.log(choice);
            return choice;
        } else {
            alert('Error');
        }
    }
}