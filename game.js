console.log("Let's play Rock, Paper, Scissors!");

function getComputerChoice() {
    let random_num = Math.random();

    if (random_num < .33) {
        return "Rock";
    } else if  (random_num < .67) {
        return "Paper";
    } else {
        return "Scissors";
    }

    
}

console.log(getComputerChoice())