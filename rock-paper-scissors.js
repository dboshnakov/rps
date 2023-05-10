function game() {
    //initialize the score for each player
    let playerWins = 0;
    let computerWins = 0;
    //play rounds of the game until either the player of the computer reaches 3 wins
    for (let i = 1; playerWins !== 3 && computerWins !== 3; i++) {
        let result = playRound();
        //based on the returned value of the playRound function, determine the winner and increment their 'win' value
        if (result.includes("win")) {   
            playerWins ++;
        } else if (result.includes("lost")) {
            computerWins ++;
        } 
        //after incrementing the winner's score show the result of the round
        console.log(result);
        console.log(`Player wins: ${playerWins}. Computer wins: ${computerWins}`);
    }
    //after the loop ends, based on each participant's score, determine the overall winner
    if (playerWins > computerWins) {
        console.log(`End result: You win! ${playerWins}:${computerWins}`);
    } else {
        console.log(`End result: Computer wins! ${playerWins}:${computerWins}`);
    }
    //after determining the winner, prompt the user to decide if they want to start a new game or not
    if (confirm("Play a new game?")) {
        game();
    } else {
        return "See you soon!";
    }
}


function playRound() {
    //get each participant's choice by triggering the respective functions
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    //handle case where the user has cancelled the game 
    if (playerChoice.includes("Cancelled.")) {
        //-> do nothing
    //otherwise, show both choices
    } else {
        console.log();
        console.log(`Your choice: ${playerChoice}`);
        console.log(`Computer's choice: ${computerChoice}`);
        //compare the choices and determine the winner (or draw)
        if (computerChoice === playerChoice) {
            return (`Both you and the computer picked ${playerChoice}. Draw.`)
        } else if (computerChoice === "rock" && playerChoice === "paper") {
            return("Paper beats rock. You win!");
        } else if (computerChoice === "rock" && playerChoice === "scissors") {
            return("Rock beats scissors. You lost!");
        } else if (computerChoice === "paper" && playerChoice === "rock") {
            return("Paper beats rock. You lost!");
        } else if (computerChoice === "paper" && playerChoice === "scissors") {
            return("Scissors beats paper. You win!");
        } else if (computerChoice === "scissors" && playerChoice === "rock") {
            return("Rock beats scissors. You win!");
        } else if (computerChoice === "scissors" && playerChoice === "paper") {
            return("Scissors beats paper. You lost!");
        }
    }
}

function getPlayerChoice() {
    //prompt question to the user
    const choice = prompt("Type out your weapon of choice: \rrock \rpaper \rscissors");
    // handle case where input of the user is null (closing the prompt with escape/cancel)
    if (choice === null) {
        console.log("Game cancelled.");
    // convert the user's input to lowercase & compare to the expected input options
    // if true - return the user's input in lowercase 
    } else if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") { 
        return choice.toLowerCase();
    } else {
        //if not true - show an alert pop-up (same as in row 14)
        alert("Invalid input.");
        //trigger the function again
        return getPlayerChoice();
    }
}

function getComputerChoice() {
    //get a random number between 1 and 3
    const computerChoice =  Math.floor(Math.random() * (4 - 1)+ 1);
    //convert the random number to one of the expected input options
    return (computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors");
}