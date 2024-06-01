console.log("Let's play Rock, Paper, Scissors!");

let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
  let random_num = Math.random();

  if (random_num < 0.33) {
    return "rock";
  } else if (random_num < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
    while(true) {
        let human_choice = prompt("Enter your choice: ");

        if (human_choice.toLowerCase() == "rock" || human_choice.toLowerCase() == "paper" || human_choice.toLowerCase() == "scissors") {
            return human_choice.toLowerCase();
        }
    }
}


function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log("You chose " + humanChoice + " and the computer chose " + computerChoice + "!")

    if ((computerChoice == "rock" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "rock")) {
        humanScore++;
        console.log("You win! " + humanChoice.toUpperCase().charAt(0) + humanChoice.substring(1) + " beats " + computerChoice);
    } else if (computerChoice == humanChoice) {
        console.log("You tied! You both chose " + humanChoice)
    } else {
        computerScore++;
        console.log("You lose! " +  computerChoice.toUpperCase().charAt(0) + computerChoice.substring(1) + " beats " + humanChoice);
    }

    console.log("Current score: You: " + humanScore + " Computer: " + computerScore);
    round++;
}

function playGame() {

    while (round < 5) {
        playRound();
    }
    
    if (humanScore > computerScore) {
        console.log("Congrats! You win the game! 🦧")
    } else {
        console.log("Game over. You lose!");
    }
}

playGame();