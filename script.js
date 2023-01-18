function getUserChoice() {

    let round = prompt("Choose Rock Paper or Scissors.");
    if (round.toUpperCase() !== "ROCK" && round.toUpperCase() !== "PAPER" && round.toUpperCase() !== "SCISSORS") {
        console.log("Invalid Choice! Please choose Rock, Paper or Scissors.")
        return;
    }
    return round;
}


function getComputerChoice() {

    const choice = ["Rock", "Paper", "Scissors"];
    let rNumber = Math.floor(Math.random() * 3);
    return choice[rNumber];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection.toUpperCase() === "ROCK") {
            return "You win! Paper beats Rock.";
        } else if (computerSelection.toUpperCase() === "SCISSORS") {
            return "You lose! scissors beats Paper.";
        }
    } else if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection.toUpperCase() === "SCISSORS") {
            return "You win! Rock beats Scissors.";
        } else if (computerSelection.toUpperCase() === "PAPER") {
            return "You lose! Paper beats Rock.";
        }

    } else if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection.toUpperCase() === "PAPER") {
            return "You win! Scissors beats Paper.";
        } else if (computerSelection.toUpperCase() === "ROCK") {
            return "You lose! Rock beats Scissors.";
        }
    }

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "Draw.";
    }
}


function game() {

    let userCount = 0;
    let computerCount = 0;

    for (let i = 0; i < 5; i++) {
        const userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        console.log("You chose: " + userChoice);
        console.log("The Computer chose: " + computerChoice);
        let jajanken = playRound(userChoice, computerChoice);
        console.log(jajanken)

        if (jajanken.includes("win") ) {
            userCount++;
        } else if (jajanken.includes("lose")) {
            computerCount++;
        }

        console.log("User Score: " + userCount + ", Computer Score: " + computerCount)
    }

    if (userCount > computerCount) {
        alert ("Congratulations! You Won The Game!")
    } else if (userCount < computerCount) {
        alert ("You lost the game. Good Game!")
    } else {
        alert ("Almost. It's a Draw!")
    }

}

console.log(game());