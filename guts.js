let playerChoice = "";
let computerString = "";
let playerScore = 0;
let computerScore = 0;

//function to decide computer move.
function computerPlay() {
    //assign random number to variable
    let computerChoice = Math.floor(Math.random() * 16);

    //equate random number to rock, paper, or scissors.
    if (computerChoice <= 5) {
        computerString = "Rock";
        return computerString;
    } else if (computerChoice <= 10) {
        computerString = "Paper";
        return computerString;
    } else {
        computerString = "Scissors";
        return computerString;
    }
}

//function to define player move.
function playerPlay() {
    //prompt and assign answer to a variable.
    playerChoice = prompt("Type: 'Rock', 'Paper', or 'Scissors'. ");
    //allow answer to be case insinsitive.
    playerChoice.toLowerCase();

    //assign insinitivity to appropriate string.
    if (playerChoice = "rock") {
        playerChoice = "Rock";
        return playerChoice;
    } else if (playerChoice = "paper") {
        playerChoice = "Paper";
        return playerChoice;
    } else {
        playerChoice = "Scissors";
        return playerChoice;
    }
}

//gameplay logic function
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay(computerString);
    playerSelection = playerPlay(playerChoice);
    

    
    if (computerSelection == "Rock" && playerSelection == "Rock" || computerSelection == "Paper" && playerSelection == "Paper" || computerSelection == "Scissors" && playerSelection == "Scissors") {
        console.log("You played " + playerSelection + ", The computer played " + computerSelection);
        console.log("Tie.");
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        console.log("You played " + playerSelection + ", The computer played " + computerSelection);
        console.log("Computer wins. Rock beats Scissors.");
        computerScore++;
    } else if (computerSelection == "Rock" && playerSelection == "Paper") {
        console.log("You played " + playerSelection + ", The computer played " + computerSelection);
        console.log("You win. Paper beats Rock.");
        playerScore++;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You played " + playerSelection + ", The computer played " + computerSelection);
        console.log("You win. Rock beats Scissors.");
        playerScore++;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You played " + playerSelection + ", The computer played " + computerSelection);
        console.log("Computer wins. Paper beats Rock.");
        computerScore++;
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
        console.log("You played " + playerSelection + ", The computer played " + computerSelection);
        console.log("Computer Wins. Paper beats Rock.");
        computerScore++;
    } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
        console.log("You played " + playerSelection + ", The computer played " + computerSelection);
        console.log("You win. Scissors beats Paper.");
        playerScore++;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You played " + playerSelection + ", The computer played " + computerSelection);
        console.log("You win. Paper beats Rock.");
        playerScore++;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You played " + playerSelection + ", The computer played " + computerSelection);
        console.log("Computer Wins. Scissors beats Paper.");
        computerScore++;
    } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        console.log("You played " + playerSelection + ", The computer played " + computerSelection);
        console.log("You Win. Rock beats Scissors.");
        playerScore++;
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        console.log("You played " + playerSelection + ", The computer played " + computerSelection);
        console.log("Computer wins. Scissors beats Paper.");
        computerScore++;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You played " + playerSelection + ", The computer played " + computerSelection);
        console.log("Computer Wins. Rock beats Scissors.");
        computerScore++;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You played " + playerSelection + ", The computer played " + computerSelection);
        console.log("You Win. Scissors beats Paper.");
        playerScore++;
    }
      
}

//game loop
function game(){
    do {
        playRound();
        console.log("The current score is: Computer: " + computerScore + ", Player: " + playerScore)
    }
    while (playerScore < 3 && computerScore < 3);

    if (playerScore == 3) {
        console.log("You win!");
    } else {
        console.log("You lose, better luck next time!");
    }
        
}

game();
console.log("Game Over.");

