let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");
let lizardBtn = document.querySelector("#lizardBtn");
let spockBtn = document.querySelector("#spockBtn");

let result = document.querySelector("#result");

// CPU
const cpuPlayer = () => {
  let randomPickNumber = Math.floor(Math.random() * 5);

  let randomPick = "";

  switch (randomPickNumber) {
    case 0:
      randomPick = "Rock";
      break;
    case 1:
      randomPick = "Paper";
      break;
    case 2:
      randomPick = "Scissors";
      break;
    case 3:
      randomPick = "Lizard";
      break;
    case 4:
      randomPick = "Spock";
      break;

    default:
      console.log("Invalid Number");
      break;
  }

  return randomPick;
};
let cpuPick = cpuPlayer();

// User
let handleUserInput = (pick) => {
  let userPick = pick;

  // Winner decision
  makeDecision(userPick, cpuPick);
};

rockBtn.addEventListener("click", () => handleUserInput(rockBtn.value));
paperBtn.addEventListener("click", () => handleUserInput(paperBtn.value));
scissorsBtn.addEventListener("click", () => handleUserInput(scissorsBtn.value));
lizardBtn.addEventListener("click", () => handleUserInput(lizardBtn.value));
spockBtn.addEventListener("click", () => handleUserInput(spockBtn.value));

/*
 * This black magic works.
 * It is the mathematical representation of the game mechanics.
 */
const evaluateWinner = function (player1, player2) {
  let difference = player1 - player2;
  if (difference < 0) {
    difference += 5;
  }
  if (player1 === player2) {
    tie();
  } else {
    if (difference % 2) {
      playerWin();
    } else {
      cpuWin();
    }
  }
};

// Decide who won
let makeDecision = (user, cpu) => {
  if (user === cpu) {
    result.innerText = "Tie";
  } else if (user === "Rock") {
    if (cpu === "Paper") {
      result.innerText = "You Lost";
    } else if (cpu === "Scissors") {
      result.innerText = "You Win";
    } else if (cpu === "Lizard") {
      result.innerText = "You Win";
    } else {
      result.innerText = "You Lost";
    }
  } else if (user === "Paper") {
    if (cpu === "Rock") {
      result.innerText = "You Win";
    } else if (cpu === "Scissors") {
      result.innerText = "You Lost";
    } else if (cpu === "Lizard") {
      result.innerText = "You Lost";
    } else {
      result.innerText = "You Win";
    }
  } else if (user === "Scissors") {
    if (cpu === "Rock") {
      result.innerText = "You Lost";
    } else if (cpu === "Paper") {
      result.innerText = "You Win";
    } else if (cpu === "Lizard") {
      result.innerText = "You Win";
    } else {
      result.innerText = "You Lost";
    }
  } else if (user === "Lizard") {
    if (cpu === "Rock") {
      result.innerText = "You Lost";
    } else if (cpu === "Paper") {
      result.innerText = "You Win";
    } else if (cpu === "Scissors") {
      result.innerText = "You Lost";
    } else {
      result.innerText = "You Win";
    }
  } else if (user === "Spock") {
    if (cpu === "Rock") {
      result.innerText = "You Win";
    } else if (cpu === "Paper") {
      result.innerText = "You Lost";
    } else if (cpu === "Scissors") {
      result.innerText = "You Win";
    } else {
      result.innerText = "You Lost";
    }
  }
};
