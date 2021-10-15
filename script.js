let playerChoice = "";
let computerString = "";
let playerScore = 0;
let computerScore = 0;

setUp();

function setUp() {
    document.getElementById("plaOutput").innerHTML = "You play: ";
    document.getElementById("cpuOutput").innerHTML = "Computer plays: ";
    document.getElementById("scoreBoard").innerHTML ="Computer Score: " + computerScore + " | Player Score: " + playerScore;
}

function newGame(event) {
    playerScore = 0;
    computerScore = 0;
    let removah = document.getElementById('reboot');
    let removah2 = document.getElementById('newGame');
    removah.remove();
    removah2.remove();
    setUp();
}



function rockHandler(event) {
    
    if (playerScore < 5 && computerScore < 5){
        playerChoice = "Rock";
        computerSelection = computerPlay(computerString);
        document.getElementById("plaOutput").innerHTML = "You play: " + playerChoice;
        document.getElementById("cpuOutput").innerHTML = "Computer plays: " + computerString;

        playRound(playerChoice, computerSelection);
    } else {
        document.getElementById("reboot").innerHTML = "Game Over";
        
        let newGameBtn = document.createElement('button');
        let newGameBtnText = document.createTextNode("New Game");

        newGameBtn.appendChild(newGameBtnText);
        newGameBtn.addEventListener('click', newGame);

        let myDiv = document.getElementById('newGame');
        myDiv.appendChild(newGameBtn);
    }
    
}
    

function papHandler(event) {
    if (playerScore < 5 && computerScore < 5){
        playerChoice = "Paper";
        computerSelection = computerPlay(computerString);
        document.getElementById("plaOutput").innerHTML = "You play: " + playerChoice;
        document.getElementById("cpuOutput").innerHTML = "Computer plays: " + computerString;

        playRound(playerChoice, computerSelection);

    } else {
        document.getElementById("reboot").innerHTML = "Game Over";
        let newGameBtn = document.createElement('button');

        let newGameBtnText = document.createTextNode("New Game");

        newGameBtn.appendChild(newGameBtnText);
        newGameBtn.addEventListener('click', newGame);

        let myDiv = document.getElementById('newGame');
        myDiv.appendChild(newGameBtn);

    }
}
    

function sciHandler(event) {
    if (playerScore < 5 && computerScore < 5){
        playerChoice = "Scissors";
        computerSelection = computerPlay(computerString);
        document.getElementById("plaOutput").innerHTML = "You play: " + playerChoice;
        document.getElementById("cpuOutput").innerHTML = "Computer plays: " + computerString;

        playRound(playerChoice, computerSelection);

    } else {
        document.getElementById("reboot").innerHTML = "Game Over";
        let newGameBtn = document.createElement('button');
        let newGameBtnText = document.createTextNode("New Game");

        newGameBtn.appendChild(newGameBtnText);
        newGameBtn.addEventListener('click', newGame);

        let myDiv = document.getElementById('newGame');
        myDiv.appendChild(newGameBtn);
    }
}


const rockBtn = document.querySelector('.rockImage');
rockBtn.addEventListener('click', rockHandler);

const papBtn = document.querySelector('.paperImage');
papBtn.addEventListener('click', papHandler);

const sciBtn = document.querySelector('.scissorImage');
sciBtn.addEventListener('click', sciHandler);


//const newGameBtn = document.querySelector('.newGame');
//newGameBtn.addEventListener('click', newGame);


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


//gameplay logic function
function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        document.getElementById("outcome").innerHTML = "Tie";
        document.getElementById("scoreBoard").innerHTML = "Computer Score: " + computerScore + " | Player Score: " + playerScore;
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        document.getElementById("outcome").innerHTML = "Computer wins. Rock beats Scissors.";
        computerScore++;
        document.getElementById("scoreBoard").innerHTML = "Computer Score: " + computerScore + " | Player Score: " + playerScore;
    } else if (computerSelection == "Rock" && playerSelection == "Paper") {
        document.getElementById("outcome").innerHTML = "You win. Paper beats Rock.";
        playerScore++;
        document.getElementById("scoreBoard").innerHTML = "Computer Score: " + computerScore + " | Player Score: " + playerScore;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        document.getElementById("outcome").innerHTML = "You win. Rock beats Scissors.";
        playerScore++;
        document.getElementById("scoreBoard").innerHTML = "Computer Score: " + computerScore + " | Player Score: " + playerScore;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        document.getElementById("outcome").innerHTML = "Computer wins. Paper beats Rock.";
        computerScore++;
        document.getElementById("scoreBoard").innerHTML = "Computer Score: " + computerScore + " | Player Score: " + playerScore;
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
        document.getElementById("outcome").innerHTML = "Computer Wins. Paper beats Rock.";
        computerScore++;
        document.getElementById("scoreBoard").innerHTML = "Computer Score: " + computerScore + " | Player Score: " + playerScore;
    } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
        document.getElementById("outcome").innerHTML = "You win. Scissors beats Paper.";
        playerScore++;
        document.getElementById("scoreBoard").innerHTML = "Computer Score: " + computerScore + " | Player Score: " + playerScore;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        document.getElementById("outcome").innerHTML = "You win. Paper beats Rock.";
        playerScore++;
        document.getElementById("scoreBoard").innerHTML = "Computer Score: " + computerScore + " | Player Score: " + playerScore;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        document.getElementById("outcome").innerHTML = "Computer Wins. Scissors beats paper.";
        computerScore++;
        document.getElementById("scoreBoard").innerHTML = "Computer Score: " + computerScore + " | Player Score: " + playerScore;
    } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        document.getElementById("outcome").innerHTML = "You Win. Rock beats Scissors.";
        playerScore++;
        document.getElementById("scoreBoard").innerHTML = "Computer Score: " + computerScore + " | Player Score: " + playerScore;
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        document.getElementById("outcome").innerHTML = "Computer wins. Scissors beats Paper.";
        computerScore++;
        document.getElementById("scoreBoard").innerHTML = "Computer Score: " + computerScore + " | Player Score: " + playerScore;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        document.getElementById("outcome").innerHTML = "Computer Wins. Rock beats Scissors.";
        computerScore++;
        document.getElementById("scoreBoard").innerHTML = "Computer Score: " + computerScore + " | Player Score: " + playerScore;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        document.getElementById("outcome").innerHTML = "You Win. Scissors beats Paper.";
        playerScore++;
        document.getElementById("scoreBoard").innerHTML = "Computer Score: " + computerScore + " | Player Score: " + playerScore;
    }     
}