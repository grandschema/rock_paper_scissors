// debugger;

// Add event listener to buttons and call playRound everytime button is clicked
let btnChoices = document.querySelectorAll(".choice-btns");
let resultsDisplay = document.querySelector(".results");

let playerScore = 0;
let aiScore = 0;

playerScoreElement = document.querySelector(".player");
aiScoreElement = document.querySelector(".ai");

for(let i = 0; i < btnChoices.length; i++){
    btnChoices[i].addEventListener('click', function (){
        playerSelection = this.innerHTML;
        resultsDisplay.innerHTML = playRound(playerSelection);
        
    });
}



// getComputerChoice randomly returns rock, paper, scissors
function getComputerChoice(){
    let randNum = Math.floor(Math.random() * 3);
    
    switch(randNum){
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2: 
            return 'Scissors';
            break;
        default:
            console.log("something went wrong...");
    }
}

// Function play round returns the winner        0: 'Rock' 1: 'Paper' 2: 'Siccors'
function playRound(playerSel){
    
    let CHOICES = ["Rock", "Paper", "Scissors"];
    let computerChoice = getComputerChoice();

    let playerChoice = playerSel.charAt(0).toUpperCase() + playerSel.substring(1);
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1);

    if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
        playerScore++;
        playerScoreElement.innerHTML = playerScore;
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }

    else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
        playerScore++;
        playerScoreElement.innerHTML = playerScore;
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }

    else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
        playerScore++;
        playerScoreElement.innerHTML = playerScore;
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }

    else if(playerChoice == computerChoice){
        return "It's a Tie!";
    }
    
    else {
        aiScore++;
        aiScoreElement.innerHTML = aiScore;
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}

// function game(){
//     for(let i = 0; i < 5; i++){
//         let playerSelection = prompt("Please choose: 'Rock', 'Paper', 'Scissors': " );
//         console.log(playRound(playerSelection));
//     }
// }


