
// Initial Constants
const rps = ['rock', 'paper', 'scissors'] 
let computerSelection = '';
let playerSelection = '';
let playerWins = 0;
let computerWins = 0;
let draws = 0;

// Function that randomly chooses rock, paper or scissors for the computer
let getComputerChoice = () => { 
    let randomComputerChoice = rps[Math.floor((Math.random() * rps.length))];
    return randomComputerChoice;
};

// Function that allows the player to choose either rock paper or scissors
let playerSelectionFunction = () => {
    playerPrompt = (prompt("Enter 'rock', 'paper' or 'scissors'")).toLowerCase();
    return playerPrompt;
} 

// Function that plays a single round of rock, paper, scissors
let playRound = (computerSelection, playerSelection) => {
    // Game is played out
    if 
        ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerWins += 1;
        return `Congrats you win. Your selection of: ${playerSelection}, beats the computers selection of: ${computerSelection},`;
    } else if (playerSelection == computerSelection){
        draws += 1;
        return `Its a draw you both selected ${playerSelection}`;
    } else {
        computerWins += 1;
        return `You lose, ${computerSelection} beats ${playerSelection}!`;
    }  
}

// Function that combines the functions of getComputerChoice, playerSelection and playRound 
let game = () => {
    computerSelection = getComputerChoice();
    // console.log(computerSelection);
    playerSelection = playerSelectionFunction();
    // console.log(playerSelection);
    return playRound(playerSelection, computerSelection)
}

// Function that plays the 'game' function 5 times. Whilst also keeping score of the results
let letsPlay = () => {
    for (let i = 0; i < 5; i++) {
        console.log(game());
    };
    console.log(`You scored ${playerWins} wins. The computer scored ${computerWins} wins. And there were ${draws} draws`);
    if (computerWins > playerWins) {   
        console.log('Sorry the computer Wins');
        } else if (computerWins == playerWins){
        console.log('Sorry its a draw you need to play again');
        } else {
        console.log('Yay you won');
    }
}