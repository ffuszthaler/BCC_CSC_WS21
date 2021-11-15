let rockBtn = document.querySelector(".rockBtn");
let paperBtn = document.querySelector(".paperBtn");
let scissorsBtn = document.querySelector(".scissorsBtn");
let lizardBtn = document.querySelector(".lizardBtn");
let spockBtn = document.querySelector(".spockBtn");

let cpuPlayer = () => {
  let randomPickNumber = Math.floor(Math.random() * 5);
  // console.log(randomPickNumber);

  let randomPick = "";

  switch (randomPickNumber) {
    case 0:
      // console.log("Rock");
      randomPick = "Rock";
      break;
    case 1:
      // console.log("Paper");
      randomPick = "Paper";
      break;
    case 2:
      // console.log("Scissors");
      randomPick = "Scissors";
      break;
    case 3:
      // console.log("Lizard");
      randomPick = "Lizard";
      break;
    case 4:
      // console.log("Spock");
      randomPick = "Spock";
      break;

    default:
      console.log("Invalid Number");
      break;
  }

  return randomPick;
};

console.log(cpuPlayer());
