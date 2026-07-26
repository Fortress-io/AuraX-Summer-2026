function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {

    let humanLower = humanChoice.toLowerCase();

    if (humanLower === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanLower === "rock" && computerChoice === "scissors") ||
      (humanLower === "paper" && computerChoice === "rock") ||
      (humanLower === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanLower} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanLower}`);
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log(`--- Round ${i + 1} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("--- Game Over ---");
  console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);
  
  if (humanScore > computerScore) {
    console.log("Congratulations, you won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, the computer won the game.");
  } else {
    console.log("It's an overall tie!");
  }
}


playGame();