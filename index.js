let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let draw = "draw";
let win = "win";
let lost = "lost";

document.getElementById("btnRock").addEventListener("click", function () {
  playRound(rock, getComputerChoice());
});

document.getElementById("btnPaper").addEventListener("click", function () {
  playRound(paper, getComputerChoice());
});

document.getElementById("btnScissors").addEventListener("click", function () {
  playRound(scissors, getComputerChoice());
});

const resultText = document.getElementById("result");

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
  let playerRoundOutcome;
  if (playerSelection == computerSelection) {
    playerRoundOutcome = draw;
  } else {
    switch (playerSelection) {
      case rock:
        if (computerSelection == paper) {
          playerRoundOutcome = win;
        } else if (computerSelection == scissors) {
          playerRoundOutcome = lost;
        }
        break;

      case paper:
        if (computerSelection == rock) {
          playerRoundOutcome = win;
        } else if (computerSelection == scissors) {
          playerRoundOutcome = lost;
        }
        break;

      case scissors:
        if (computerSelection == paper) {
          playerRoundOutcome = win;
        } else if (computerSelection == rock) {
          playerRoundOutcome = lost;
        }
        break;

      default:
        console.log("ERROR!: Player did not input valid choice");
        break;
    }
  }

  resultText.innerHTML = playerRoundOutcome;
}

// function game() {
//     let playerWins = 0;
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Input rock, paper, or scissors");
//         playerSelection = playerSelection.toLowerCase();
//         let computerSelection = getComputerChoice();

//         playerRoundOutcome = playRound(playerSelection, computerSelection);
//         if (playerRoundOutcome == win) { playerWins += 1; }
//         console.log("Player has " + playerRoundOutcome);
//     }
//     console.log("Game Over! Player Score is " + playerWins);
// }

// game();
