let userCount = 0;
let computerCount = 0;
const paperButton = document.querySelector("#paper");
const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector("#scissors");
const findRounds = document.querySelector("#rounds");
const findResult = document.querySelector("#result");
const choice = ["rock", "paper", "scissors"];

function PlayRound(user) {
  let rChoice = choice [Math.floor(Math.random() * 3)];

  if (user === rChoice) {
    findResult.innerHTML = "Draw!";
  } else if (user === "paper" && rChoice === "rock" || user === "scissors" && rChoice === "paper" || user === "rock" && rChoice=== "scissors") {
    userCount++;
    findResult.innerHTML = "You win!";
  } else {
    computerCount++;
    findResult.innerHTML = "You lose!";
  }

  if (userCount === 5) {
    findResult.innerHTML = "You won the Game!";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else if (computerCount === 5) {
    findResult.innerHTML = "Computer won the Game!";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } 
  findRounds.innerHTML = "Your score: " + userCount + " VS Computer score: " + computerCount;

}

rockButton.addEventListener('click', () => {
   PlayRound("rock");
});

paperButton.addEventListener('click', () => {
  PlayRound("paper");
  });

scissorsButton.addEventListener('click', () => {
  PlayRound("scissors");
});


