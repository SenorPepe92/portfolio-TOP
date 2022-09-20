// console.log('This is to make sure CL is working');

// Initial Constants
const rps = ['rock', 'paper', 'scissors'] 
let computerSelection = '';
let playerSelection = '';
let playerWins = 0;
let computerWins = 0;
let draws = 0;

let getComputerChoice = () => { 
    let randomComputerChoice = rps[Math.floor((Math.random() * rps.length))];
    return randomComputerChoice;
};
// let computerSelection = getComputerChoice();

// console.log(computerSelection);

let playerSelectionFunction = () => {
    playerPrompt = (prompt("Enter 'rock', 'paper' or 'scissors'")).toLowerCase();
    return playerPrompt;
} 
// let playerSelection = playerSelectionFunction();

// console.log(playerSelection);

let playRound = (computerSelection, playerSelection) => {
    // Game is played out
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerWins += 1;
        return `Congrats you win ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == computerSelection){
        draws += 1;
        return `Its a draw you both selected ${playerSelection}`;
    } else {
        computerWins += 1;
        return `You lose, ${computerSelection} beats ${playerSelection}!`;
    }  
}

// console.log(`The computer picked ${computerSelection}`);
// console.log(`You picked ${playerSelection}`);

let game = () => {
    computerSelection = getComputerChoice();
    // console.log(computerSelection);
    playerSelection = playerSelectionFunction();
    // console.log(playerSelection);
    return playRound(playerSelection, computerSelection)
}

// console.log(game());
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





// if (playerSelection == 'rock' || playerSelection == 'paper' ||playerSelection == 'scissors') {
//     prompt("Thank you");
// } else {
//     playerSelection = prompt("Please enter a valid selection of either 'rock', 'paper' or 'scissors'")
// }