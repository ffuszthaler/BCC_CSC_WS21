const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const lizardBtn = document.querySelector("#lizardBtn");
const spockBtn = document.querySelector("#spockBtn");
const result = document.querySelector("#result");
const userScoreP = document.querySelector("#userScore");
const cpuScoreP = document.querySelector("#cpuScore");

let userScore = 0;
let cpuScore = 0;

let winSound = new Audio("./audio/win.mp3");
winSound.volume = 0.5;
let lostSound = new Audio("./audio/lost.mp3");
lostSound.volume = 0.5;

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

// User
const handleUserInput = (pick) => {
  let userPick = pick;

  // Winner decision
  let newCpuPick = cpuPlayer();
  makeDecision(userPick, newCpuPick);
  console.log("new CPU Decision: " + newCpuPick);
  return userPick;
};

rockBtn.addEventListener("click", () => handleUserInput(rockBtn.value));
paperBtn.addEventListener("click", () => handleUserInput(paperBtn.value));
scissorsBtn.addEventListener("click", () => handleUserInput(scissorsBtn.value));
lizardBtn.addEventListener("click", () => handleUserInput(lizardBtn.value));
spockBtn.addEventListener("click", () => handleUserInput(spockBtn.value));

// Execute on player win
const playerWin = () => {
  result.innerText = "Player won";
  userScore++;
  console.log("User Points: " + userScore);
  userScoreP.innerHTML = userScore;
  winSound.play();
};

// Execute on CPU win
const cpuWin = (cpu) => {
  result.innerText = "CPU chose " + cpu + " and won";
  cpuScore++;
  console.log("CPU Points: " + cpuScore);
  cpuScoreP.innerHTML = cpuScore;
  lostSound.play();
};

// Decide who won (I know)
const makeDecision = (user, cpu) => {
  if (user === cpu) {
    result.innerText = "Tie";
    lostSound.play();
  } else if (user === "Rock") {
    if (cpu === "Paper") {
      cpuWin(cpu);
    } else if (cpu === "Scissors") {
      playerWin();
    } else if (cpu === "Lizard") {
      playerWin();
    } else {
      cpuWin(cpu);
    }
  } else if (user === "Paper") {
    if (cpu === "Rock") {
      playerWin();
    } else if (cpu === "Scissors") {
      cpuWin(cpu);
    } else if (cpu === "Lizard") {
      cpuWin(cpu);
    } else {
      playerWin();
    }
  } else if (user === "Scissors") {
    if (cpu === "Rock") {
      cpuWin(cpu);
    } else if (cpu === "Paper") {
      playerWin();
    } else if (cpu === "Lizard") {
      playerWin();
    } else {
      cpuWin(cpu);
    }
  } else if (user === "Lizard") {
    if (cpu === "Rock") {
      cpuWin(cpu);
    } else if (cpu === "Paper") {
      playerWin();
    } else if (cpu === "Scissors") {
      cpuWin(cpu);
    } else {
      playerWin();
    }
  } else if (user === "Spock") {
    if (cpu === "Rock") {
      playerWin();
    } else if (cpu === "Paper") {
      cpuWin(cpu);
    } else if (cpu === "Scissors") {
      playerWin();
    } else {
      cpuWin(cpu);
    }
  }
};
