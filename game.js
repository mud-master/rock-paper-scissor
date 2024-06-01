console.log("Let's play Rock, Paper, Scissors!");

let humanScore = 0;
let computerScore = 0;
let round = 1;

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
  while (true) {
    let human_choice = prompt("Enter your choice: ");

    if (
      human_choice.toLowerCase() == "rock" ||
      human_choice.toLowerCase() == "paper" ||
      human_choice.toLowerCase() == "scissors"
    ) {
      return human_choice.toLowerCase();
    }
  }
}

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  if (
    (computerChoice == "rock" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "rock")
  ) {
    humanScore++;

    console.log(
      "Round " +
        round +
        ": You win! " +
        humanChoice.toUpperCase().charAt(0) +
        humanChoice.substring(1) +
        " beats " +
        computerChoice + " | Current score: You: " + humanScore + " Computer: " + computerScore
    );
    round++;
  } else if (computerChoice == humanChoice) {
    console.log(
        "Round " + round
         + ": You both chose " + humanChoice + "! Let's replay round " + round
    );
  } else {
    computerScore++;

    console.log(
        "Round " +
          round +
          ": You lose! " +
          computerChoice.toUpperCase().charAt(0) +
          computerChoice.substring(1) +
          " beats " +
          humanChoice + " | Current score: You: " + humanScore + " Computer: " + computerScore
      );

      round++;
  }
}

function playGame() {
  while (round <= 5) {
    if (playRound()) {
      round++;
    }
  }

  console.log(
    "Final score: You: " + humanScore + " Computer: " + computerScore
  );
  if (humanScore > computerScore) {
    console.log("Congrats! You win the game! 🦧");
  } else {
    console.log("Game over. You lose!");
  }
}

