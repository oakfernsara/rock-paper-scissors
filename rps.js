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
    //get playerSelection via prompt
    //create playerWins variable set to false
    //IF both selections match, declare a tie
    //ELSE IF playerSelection is rock && computerSelection is paper, playerWins = true
    //ELSE IF playerSelection is paper && computerSelection is rock, playerWins = true
    //ELSE IF playerSelection is scissors && computerSelection is paper, playerWins = true