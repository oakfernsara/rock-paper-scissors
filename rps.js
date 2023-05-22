//getComputerChoice
function computerChoice() {
    //choose a random number from 0-2
    let number = Math.floor(Math.random() * 3);
    let rpsArray = ["Rock", "Paper", "Scissors"];
    //return rock, paper, or scissors from array based on random number
    console.log('computerChoice is', rpsArray[number])
    return rpsArray[number]
}

//rpsRound - playerSelection and computerSelection
    function rpsRound(computerSelection, playerSelection) {
    //create playerWins variable set to false
    let playerWins = false;
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    //IF both selections match, declare a tie
    if (computerSelection === playerSelection) {
        playerWins = "tie";
    }
    //ELSE IF winning conditions, playerWins = true
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
       playerWins = true;
    }

    //return win statement if true, lose statement if false, tie statement if tie
    if (playerWins === true) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (playerWins === false) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        return `It's a tie!`
    }
    
    }

const playerSelection = "rock";
const computerSelection = computerChoice();
console.log(rpsRound(playerSelection, computerSelection));