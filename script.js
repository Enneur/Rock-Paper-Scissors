function getComputerChoice() {
    const choice = ["Rock","Paper","Scissors"];
    let rNumber = Math.floor(Math.random() * 3);
    return choice[rNumber];
    
}


console.log(getComputerChoice());