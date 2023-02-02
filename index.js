let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let draw = "draw";
let win = "win";
let lost = "lost"

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerChoice = null;

    switch (getRandomNumber(3)) {
        case 0:
            computerChoice = rock;
            break;
        case 1:
            computerChoice = paper;
            break;
        case 2:
            computerChoice = scissors;
            break;
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    // Make sure to convert playerSelection to all lowercase before this
    if (playerSelection == computerSelection) {return draw;} else {
        switch (playerSelection) {
            case rock:
                if (computerSelection == paper) {return win;} else if (computerSelection == scissors) {return lost;} 
                break;
                
            case paper:
                if (computerSelection == rock) {return win;} else if (computerSelection == scissors) {return lost;} 
                break;
            
            case scissors:
                if (computerSelection == paper) {return win;} else if (computerSelection == rock) {return lost;} 
                break;
            
            default:
                console.log("ERROR!: Player did not input valid choice");
                break;
        }
    }

}




function game() {
    let playerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Input rock, paper, or scissors");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        
        playerRoundOutcome = playRound(playerSelection, computerSelection);
        if (playerRoundOutcome == win) { playerWins += 1; }
        console.log("Player has " + playerRoundOutcome);
    }
    console.log("Game Over! Player Score is " + playerWins);
}

game();