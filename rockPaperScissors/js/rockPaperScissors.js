// console.log('This is to make sure CL is working');

const rps = ['rock', 'paper', 'scissors'] 

let getComputerChoice = () => { 
    let randomComputerChoice = rps[Math.floor((Math.random() * rps.length))];
    return randomComputerChoice;
};
let computerSelection = getComputerChoice();

console.log(computerSelection);

let playerSelectionFunction = () => {
    playerPrompt = (prompt("Enter 'rock', 'paper' or 'scissors'")).toLowerCase();
    return playerPrompt;
} 
let playerSelection = playerSelectionFunction();

console.log(playerSelection);

let playRound = (computerSelection, playerSelection) => {
    // Game is played out
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return `Congrats you win ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection == computerSelection){
        return `Its a draw you both selected ${playerSelection}`
    } else {
        return `You lose, ${computerSelection} beats ${playerSelection}!`
    }  
}

console.log(`The computer picked ${computerSelection}`);
console.log(`You picked ${playerSelection}`);


let game = () => {
    return playRound(playerSelection, computerSelection)
}

console.log(game());




// if (playerSelection == 'rock' || playerSelection == 'paper' ||playerSelection == 'scissors') {
//     prompt("Thank you");
// } else {
//     playerSelection = prompt("Please enter a valid selection of either 'rock', 'paper' or 'scissors'")
// }