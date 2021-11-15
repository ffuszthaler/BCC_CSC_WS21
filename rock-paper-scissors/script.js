let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");
let lizardBtn = document.querySelector("#lizardBtn");
let spockBtn = document.querySelector("#spockBtn");

let result = document.querySelector("#result");

let userScoreP = document.querySelector("#userScore");
let cpuScoreP = document.querySelector("#cpuScore");
let userScore = 0;
let cpuScore = 0;

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
  return userPick;
};

rockBtn.addEventListener("click", () => handleUserInput(rockBtn.value));
paperBtn.addEventListener("click", () => handleUserInput(paperBtn.value));
scissorsBtn.addEventListener("click", () => handleUserInput(scissorsBtn.value));
lizardBtn.addEventListener("click", () => handleUserInput(lizardBtn.value));
spockBtn.addEventListener("click", () => handleUserInput(spockBtn.value));

// Execute on win
let playerWin = () => {
  result.innerText = "Player won";
  userScore++;
  console.log("User Points: " + userScore);
  userScoreP.innerHTML = userScore;

  // let newCpuPick = cpuPlayer();
  // let newUserPick = handleUserInput();
  // makeDecision(newUserPick, newCpuPick);
};

let cpuWin = () => {
  result.innerText = "CPU chose " + cpuPick + " and won";
  cpuScore++;
  console.log("CPU Points: " + cpuScore);
  cpuScoreP.innerHTML = cpuScore;

  // let newCpuPick = cpuPlayer();
  // let newUserPick = handleUserInput();
  // makeDecision(newUserPick, newCpuPick);
};

// Decide who won (I know)
let makeDecision = (user, cpu) => {
  if (user === cpu) {
    result.innerText = "Tie";
  } else if (user === "Rock") {
    if (cpu === "Paper") {
      cpuWin();
    } else if (cpu === "Scissors") {
      playerWin();
    } else if (cpu === "Lizard") {
      playerWin();
    } else {
      cpuWin();
    }
  } else if (user === "Paper") {
    if (cpu === "Rock") {
      playerWin();
    } else if (cpu === "Scissors") {
      cpuWin();
    } else if (cpu === "Lizard") {
      cpuWin();
    } else {
      playerWin();
    }
  } else if (user === "Scissors") {
    if (cpu === "Rock") {
      cpuWin();
    } else if (cpu === "Paper") {
      playerWin();
    } else if (cpu === "Lizard") {
      playerWin();
    } else {
      cpuWin();
    }
  } else if (user === "Lizard") {
    if (cpu === "Rock") {
      cpuWin();
    } else if (cpu === "Paper") {
      playerWin();
    } else if (cpu === "Scissors") {
      cpuWin();
    } else {
      playerWin();
    }
  } else if (user === "Spock") {
    if (cpu === "Rock") {
      playerWin();
    } else if (cpu === "Paper") {
      cpuWin();
    } else if (cpu === "Scissors") {
      playerWin();
    } else {
      cpuWin();
    }
  }
};
