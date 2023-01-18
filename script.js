function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    let rNumber = Math.floor(Math.random() * 3);
    return choice[rNumber];

}


function playRound(playerSelection, computerSelection) {

    if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection.toUpperCase() === "ROCK") {
            return "You Win! Paper beats Rock.";
        } else if (computerSelection.toUpperCase() === "SCISSORS") {
            return "You lose! Scissors beats Paper.";
        }
    } else if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection.toUpperCase() === "SCISSORS") {
            return "You Win! Rock beats Scissors.";
        } else if (computerSelection.toUpperCase() === "PAPER") {
            return "You lose! Paper beats Rock.";
        }

    } else if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection.toUpperCase() === "PAPER") {
            return "You Win! Scissors beats Paper.";
        } else if (computerSelection.toUpperCase() === "ROCK") {
            return "You lose! Rock beats Scissors.";
        }
    }

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "Draw.";
    }
}

const playerSelection = "Scissors";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
