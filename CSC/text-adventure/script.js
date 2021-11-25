const startButton = document.getElementById("startGameButton");
const ambientSound = new Audio("./audio/ambient.mp3");

startButton.addEventListener("click", () => {
  ambientSound.play();
  ambientSound.volume = 0.5;
  initGame();
});

const initGame = () => {
  const gameDiv = document.getElementById("game");

  let image;
  if (story[story.currentScene].image) {
    image = '<img id="chapterImg"/>';
  } else {
    // if this is missing a wild undefined appears
    image = "";
  }

  // story[story.currentScene] - works a bit like an array
  gameDiv.innerHTML = `
    <h1>${story[story.currentScene].title}</h1>
    <p>${story[story.currentScene].story}</p>
    ${renderInput(story[story.currentScene].choices)}
    <button id="submitButton">Next</button>
    ${image}
  `;

  if (story[story.currentScene].image) {
    document.querySelector("#chapterImg").src =
      "img/" + story[story.currentScene].image;
  }

  const button = document.getElementById("submitButton");
  button.addEventListener("click", chooseInput);
};

const renderInput = (choices) => {
  // choices is a array
  if (!choices) return "";

  // if this is missing a wild undefined appears
  let input = "";

  // 'id' from input and 'for' from label need to be the same value to 'connect' them
  for (let i = 0; i < choices.length; i++) {
    input += `
      <div class="inputContainer">
        <input data-destination=${choices[i].destination} type='radio' id="decision-${i}" name='decision'/>
        <label for="decision-${i}">${choices[i].value}</label>
      </div>
    `;
  }
  return input;
};

const chooseInput = () => {
  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      // the chosen input defines the next scene
      story.currentScene = inputs[i].getAttribute("data-destination");
      initGame();
      return;
    }
  }
  // at the end of decision path - go back to start
  story.currentScene = story[story.currentScene].defaultDestination;
  initGame();
};
