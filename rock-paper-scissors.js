let roundsInput = document.querySelector("#rounds");


let playerScore = 0;
let computerScore = 0;
let roundsToWin = 3;
const choice1 = document.querySelector(".rock");
const choice2 = document.querySelector(".paper");
const choice3 = document.querySelector(".scissors");
const game = document.querySelector('.game');
const outcome = document.querySelector('#outcome');
const score = document.querySelector('#score');
const end = document.querySelector('#end');
const start = document.querySelector('.initial');
const restart = document.querySelector('.restart'); 

function playRound(playerChoice) {
    //get each participant's choice by triggering the respective functions
    let computerChoice = getComputerChoice();
    
    
    if (computerChoice === playerChoice) {
        outcome.textContent = `Both you and the computer picked ${playerChoice}. Draw.`
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        outcome.textContent = "Paper beats rock. You win!";
        playerScore++;
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        outcome.textContent = "Rock beats scissors. You lost!";
        computerScore++;
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        outcome.textContent = "Paper beats rock. You lost!";
        computerScore++;
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        outcome.textContent = "Scissors beats paper. You win!";
        playerScore++;
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        outcome.textContent = "Rock beats scissors. You win!";
        playerScore++;
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        outcome.textContent = "Scissors beats paper. You lost!";
        computerScore++;
    }
    score.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    
    if (checkWinner(playerScore,computerScore,roundsToWin) === "player") {        
        outcome.textContent = "You win!";
        playerScore=0;
        computerScore=0;
        end.textContent = "Final score:";
        disableChoices()
        restart.classList.remove("hidden");
    } else if (checkWinner(playerScore,computerScore,roundsToWin) === "computer") {
        outcome.textContent = "You lose! :(";
        playerScore=0;
        computerScore=0;
        end.textContent = "Final score:";
        disableChoices()
        restart.classList.remove("hidden");
    }

}

function checkWinner(playerScore,computerScore, roundsToWin) {
    if (playerScore >= roundsToWin) {
        return "player";
    } else if (computerScore >= roundsToWin) {
        return "computer";
    } 
}

function startGame(userInput) {
    roundsToWin = userInput;
    game.classList.remove("hidden");
    start.classList.add("hidden");
    enableChoices();
    end.textContent =`First to ${roundsToWin} out of ${(roundsToWin*2)-1}`;
    outcome.textContent = ` `;
    score.textContent = `Player ${playerScore} : ${computerScore} Computer`;
}

function newGame() {
    game.classList.add("hidden");
    start.classList.remove("hidden");
    clearFields();
}

function disableChoices() {
    choice1.setAttribute("disabled", true);
    choice2.setAttribute("disabled", true);
    choice3.setAttribute("disabled", true);
}

function enableChoices() {
    choice1.removeAttribute("disabled");
    choice2.removeAttribute("disabled");
    choice3.removeAttribute("disabled");
}

function clearFields() {
    outcome.textContent = ``;
    score.textContent = ``;
    end.textContent = ``;
    restart.classList.add("hidden");
}

function getComputerChoice() {
    //get a random number between 1 and 3
    const computerChoice =  Math.floor(Math.random() * (4 - 1)+ 1);
    //convert the random number to one of the expected input options
    return (computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors");
}
