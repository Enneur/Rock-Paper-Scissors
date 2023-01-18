function getComputerChoice() {

    const choice = ["Rock", "Paper", "Scissors"];
    let rNumber = Math.floor(Math.random() * 3);
    return choice[rNumber];

}

let win = 0 ;
let lose = 0 ;

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection.toUpperCase() === "ROCK") {
            console.log("You Win! Paper beats Rock.");
            win = win + 1;
            return win;
        } else if (computerSelection.toUpperCase() === "SCISSORS") {
            console.log("You lose! Scissors beats Paper.");
            lose = lose + 1;
            return lose;
        }
    } else if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection.toUpperCase() === "SCISSORS") {
            console.log("You Win! Rock beats Scissors.");
            win = win + 1;
            return win;
        } else if (computerSelection.toUpperCase() === "PAPER") {
            console.log("You lose! Paper beats Rock.");
            lose = lose + 1;
            return lose;
        }

    } else if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection.toUpperCase() === "PAPER") {
            console.log("You Win! Scissors beats Paper.");
            win = win + 1;
            return win;
        } else if (computerSelection.toUpperCase() === "ROCK") {
            console.log("You lose! Rock beats Scissors.");
            lose = lose + 1;
            return lose;
        }
    }

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "Draw.";
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        let round = prompt("Choose Rock Paper or Scissors.");
        const computer = getComputerChoice();
        console.log("You chose: " + round);
        console.log("The Computer chose: " + computer);
        console.log(playRound(round, computer));
    }

    if (win > lose) {
        alert("You won the Game!")
    } else if (win < lose) {
        alert("You lost the Game!")
    } else {
        alert("Draw!");
    }
    
}

console.log(game());