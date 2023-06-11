let playerScore = 0;
let computerScore = 0;
let roundsToWin = 3;
const roundsInput = document.querySelector("#rounds");
roundsInput.textContent = roundsToWin;
const choice1 = document.querySelector("img.rock");
const choice2 = document.querySelector("img.paper");
const choice3 = document.querySelector("img.scissors");
const choices = document.querySelector(".choices");
const rockMark = document.querySelector(".selected.rock");
const paperMark = document.querySelector(".selected.paper");
const scissorsMark = document.querySelector(".selected.scissors");
const game = document.querySelector('.game');
const outcome = document.querySelector('#outcome');
const score = document.querySelector('#score');
const end = document.querySelector('#end');
const intro = document.querySelector('.main');
const start = document.querySelector('.initial');
const restart = document.querySelector('.restart'); 
let computerChoice;
let playerChoice;

enableChoices();

function playRound(playerChoice) {
    //get each participant's choice by triggering the respective functions
    let computerChoice = getComputerChoice();
    clearChoice();
    markChoice("player",playerChoice);
    markChoice("computer",computerChoice);

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
    score.textContent = `${playerScore} : ${computerScore}`;

    endGame(checkWinner(playerScore,computerScore,roundsToWin));
}


function markChoice(player, selection) {
    if (player === "player") {
        switch (selection) {
            case 'rock':
                console.log("Player ROCK");
                rockMark.classList.add("player");
                break;
            case 'paper':
                console.log("Player PAPER");
                paperMark.classList.add("player");
                break;
            case 'scissors':
                console.log("Player SCISSORS");
                scissorsMark.classList.add("player");
                break;
        }
    } else if (player === "computer") {
        switch (selection) {
            case 'rock':
                console.log("Computer ROCK");
                rockMark.classList.add("computer");
                break;
            case 'paper':
                console.log("Computer PAPER");
                paperMark.classList.add("computer");
                break;
            case 'scissors':
                console.log("Computer SCISSORS");
                scissorsMark.classList.add("computer");
        }
    }
}

function clearChoice() {
    rockMark.classList.remove("player");
    paperMark.classList.remove("player");
    scissorsMark.classList.remove("player");
    rockMark.classList.remove("computer");
    paperMark.classList.remove("computer");
    scissorsMark.classList.remove("computer");
}

function endGame(winner) {
    if (winner === "player") {
        outcome.textContent = "You win!";
        resetGameStats();
    } else if (winner === "computer"){
        outcome.textContent = "You lose! :(";
        resetGameStats();
    }
    
}

function resetGameStats() {
    playerScore=0;
    computerScore=0;
    end.textContent = "Final score:";
    disableChoices()
    restart.classList.remove("hidden");
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
    score.textContent = `${playerScore} : ${computerScore}`;
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
    choices.classList.add("disabled");
}

function enableChoices() {
    choice1.setAttribute("onclick", "playRound('rock')");
    choice2.setAttribute("onclick", "playRound('paper')");
    choice3.setAttribute("onclick", "playRound('scissors')");
    choices.classList.remove("disabled");
}

function clearFields() {
    outcome.textContent = ``;
    score.textContent = ``;
    end.textContent = ``;
    restart.classList.add("hidden");
    clearChoice();
}

function getComputerChoice() {
    //get a random number between 1 and 3
    let computerChoice =  Math.floor((Math.random() * 3) + 1);
    //convert the random number to one of the expected input options
    return (computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors");
}

const bottom = document.querySelector("p.bottom");
const scroller = document.querySelector(".mouse-scroll");
const topBody = document.querySelector("body");

console.log(topBody.getBoundingClientRect().top);

window.addEventListener("load", toggleScrollHint);
window.addEventListener("scroll", reverseScrollHint);
window.addEventListener("resize", toggleScrollHint);

function toggleScrollHint() {
    if (bottom.getBoundingClientRect().top < this.window.innerHeight) {
        scroller.classList.add("hidden");
    } else if (topBody.getBoundingClientRect().top < 0) {
        scroller.classList.remove("hidden");
    } else {
        scroller.classList.remove("hidden");
    }
}

function reverseScrollHint() {
    if (bottom.getBoundingClientRect().top < this.window.innerHeight) {
        scroller.classList.add("bottom");
        scroller.classList.remove("top");
    } else {
        scroller.classList.add("top");
        scroller.classList.remove("bottom");
    }
}
