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

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  if (updateScoreboard(humanChoice, computerChoice)) {
    round++;
  }

  if (round == 5) {
    if (humanScore > computerScore) {
      scoreboard.textContent = "You win! Final score: You: " + humanScore + " Computer: " + computerScore ;
    } else {
      scoreboard.textContent =  "You lost! Final score: You: " + humanScore + " Computer: " + computerScore
    }
    round = 1
  }
}

function updateScoreboard(humanChoice, computerChoice) {
  if (
    (computerChoice == "rock" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "rock")
  ) {
    humanScore++;
    scoreboard.textContent =
      "Round " +
      round +
      ": You win! " +
      humanChoice.toUpperCase().charAt(0) +
      humanChoice.substring(1) +
      " beats " +
      computerChoice +
      " | Current score: You: " +
      humanScore +
      " Computer: " +
      computerScore;
    return true;
  } else if (computerChoice == humanChoice) {
    scoreboard.textContent =
      "Round " +
      round +
      ": You both chose " +
      humanChoice +
      "! Let's replay round " +
      round;
    return false;
  } else {
    computerScore++;
    scoreboard.textContent =
      "Round " +
      round +
      ": You lose! " +
      computerChoice.toUpperCase().charAt(0) +
      computerChoice.substring(1) +
      " beats " +
      humanChoice +
      " | Current score: You: " +
      humanScore +
      " Computer: " +
      computerScore;
    return true;
  }
}

const scoreboard = document.querySelector("#scoreboard");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  playRound("rock");
});

paperBtn.addEventListener("click", () => {
  playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
});

