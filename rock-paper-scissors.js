


let playerScore = 0;
let computerScore = 0;
let roundsToWin = 3;
const roundsInput = document.querySelector("#rounds");
roundsInput.textContent = roundsToWin;
const choice1 = document.querySelector(".rock");
const choice2 = document.querySelector(".paper");
const choice3 = document.querySelector(".scissors");
const choices = document.querySelector(".choices");
const game = document.querySelector('.game');
const outcome = document.querySelector('#outcome');
const score = document.querySelector('#score');
const end = document.querySelector('#end');
const intro = document.querySelector('.main');
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

function roundsDown() {
    if (roundsToWin !==1) {
        roundsToWin--;
        roundsInput.textContent = roundsToWin;
    }
}

function roundsUp() {
    if (roundsToWin !== 10) {
        roundsToWin++;
        roundsInput.textContent = roundsToWin;
    }
}

function startGame(roundsToWin) {
    game.classList.remove("hidden");
    start.classList.add("hidden");
    intro.classList.add("hidden");
    enableChoices();
    end.textContent =`First to ${roundsToWin} out of ${(roundsToWin*2)-1}`;
    outcome.textContent = ` `;
    score.textContent = `Player ${playerScore} : ${computerScore} Computer`;
}

function newGame() {
    game.classList.add("hidden");
    start.classList.remove("hidden");
    intro.classList.remove("hidden");
    clearFields();
}

function disableChoices() {
    choice1.setAttribute("onclick", false);
    choice2.setAttribute("onclick", false);
    choice3.setAttribute("onclick", false);
    //choice1.classList.add("disabled");
    //choice2.classList.add("disabled");
    //choice3.classList.add("disabled");
    choices.classList.add("disabled");
}

function enableChoices() {
    choice1.setAttribute("onclick", "playRound('rock')");
    choice2.setAttribute("onclick", "playRound('paper')");
    choice3.setAttribute("onclick", "playRound('scissors')");
    //choice1.classList.remove("disabled");
    //choice2.classList.remove("disabled");
    //choice3.classList.remove("disabled");
    choices.classList.remove("disabled");
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
