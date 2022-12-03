// debugger;
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
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }

    else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }

    else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }

    else if(playerChoice == computerChoice){
        return "It's a Tie!";
    }
    
    else {
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}

console.log(playRound('scissors'));
