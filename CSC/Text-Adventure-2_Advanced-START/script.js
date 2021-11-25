// This is the scenario object which holds all the scenarios.
let scenario = {
  one: {
    image: "./images/noSight.png",
    text: "You wake up in front of a pathway... You only have your cloths and you can barely see anything... You are confused. <br/>What was even your name?\n",
  },
  two: {
    image: "./images/Cave_Nele-Diel.jpg",
    text: 'Welcome <span class="player">PLAYER!!</span><br/>You hear mysterious sounds, but you cannot make up from where they are. However, you feel the urge to get up and go... <br/>There are only two ways, where do you go?',
    buttons: [
      ["Follow left path", "advanceTo(scenario.three)"],
      ["Follow right path", "advanceTo(scenario.ending)"],
    ],
    sound: "./sound/horror-background.mp3",
  },
  three: {
    image: "./images/imugi_by_arvalis.jpg",
    text: "A giant monstrous snake appears in front of you! After a brief moment of stun you try to grab your weapon... but there is none. You see a small shimmer of light behind the snake which could be an exit! What are you going to do?<br/>Are you going to fight it or run?",
    buttons: [
      ["Fight with whatever lies around", "advanceTo(scenario.four)"],
      ["Run for your life", "advanceTo(scenario.ending)"],
    ],
    sound: "./sound/angry-beast.mp3",
  },
  four: {
    image: "./images/game-over.jpg",
    text: '<span class="player">PLAYER</span> could not defeat the monster that appeared...',
    buttons: [["Restart", "advanceTo(scenario.two)"]],
    sound: "./sound/game-over.mp3",
  },
  ending: {
    image: "./images/blossoming_tree_tomtc.jpg",
    text: "A ray of sun light is shining down from the ceiling on a beautiful cherry blossom tree. It seems you found a way through this cave. <br/><br/>You managed to get through somehow it seems. Soon you will make your way out into freedom...",
    buttons: [["To be continued...", "resetGame()"]],
    sound: "./sound/finish.mp3",
  },
};

// ===========================================================
//                         START HERE
// ===========================================================

// get references to html
let images = document.querySelector("#images");
let text = document.querySelector("#text");
let input = document.querySelector("#input");
let btnBox = document.querySelector("#buttonBox");

// define elements
let playerName;
let currSound = new Audio();

function nameInput(event) {
  if (event.key === "Enter") {
    playerName = input.value;
    input.style.display = "none";
    input.value = "";
    advanceTo(scenario.two);
  }
}

function changeImage(img) {
  images.style.backgroundImage = `url(${img})`;
}

function changeText(txt) {
  text.innerHTML = txt.replace("PLAYER", playerName);
}

function changeButtons(btnList) {
  btnBox.innerHTML = "";

  if (btnList === undefined) {
    return;
  }

  for (let i = 0; i < btnList.length; i++) {
    btnBox.innerHTML += `
    <button class="btn btn-sm btn-primary"
      onclick=${btnList[i][1]}>
      ${btnList[i][0]} 
    </button>`;
  }
}

function changeSound(soundSrc) {
  if (soundSrc === undefined) {
    return;
  }

  // stop previous sound
  currSound.pause();

  currSound = new Audio(soundSrc);
  currSound.play();
}

function advanceTo(scenario) {
  changeImage(scenario.image);
  changeText(scenario.text);
  changeButtons(scenario.buttons);
  changeSound(scenario.sound);
}

function startGame() {
  document.querySelector(".greeting").style.display = "none";
  document.querySelector(".gameArea").style.display = "block";
  input.style.display = "inline";

  document.querySelector("body").classList.add("changeBackground");

  // start scenario one...
  advanceTo(scenario.one);
}

function resetGame() {
  // stop sounds
  currSound.pause();

  document.querySelector(".greeting").style.display = "flex";
  document.querySelector(".gameArea").style.display = "none";
  document.querySelector("body").classList.remove("changeBackground");
}
