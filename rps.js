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
        playerSelection = playerSelection.replace(/^[a-z]/, x => x.toUpperCase())
        return `You win! ${playerSelection} beats ${computerSelection}.`
    } else if (playerWins === false) {
        computerSelection = computerSelection.replace(/^[a-z]/, x => x.toUpperCase())
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    } else {
        return `It's a tie!`
    }
    
    }

    // function game() {
    //     let wins = 0;
    //     let losses = 0;
    //     let ties = 0;
    //     //play the game five times
    //     for (let x = 0; x < 5; x++) {
    //         const playerSelection = prompt('Choose rock, paper, scissor');
    //         const computerSelection = computerChoice();
    //         let result = rpsRound(computerSelection, playerSelection)
    //         console.log(result)
    //         if (result.includes('win')) {
    //             wins++;
    //         } else if (result.includes('lose')) {
    //             losses++;
    //         } else {
    //             ties++;
    //         }
    //         // and keep track of wins and losses
    //     }

    //     console.log('wins', wins, 'losses', losses, 'ties', ties)
    // }


//create three labeled buttons
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const div = document.createElement('div');

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

document.body.appendChild(div);

//add event listeners for each button to return user input
rockButton.addEventListener('click', e => {
    div.innerText = rpsRound(computerChoice(), 'rock')
});

paperButton.addEventListener('click', e => {
    div.innerText = rpsRound(computerChoice(), 'paper')
});

scissorsButton.addEventListener('click', () => {
    div.innerText = rpsRound(computerChoice(), 'scissors')
});

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);




