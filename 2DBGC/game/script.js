import Player from "./Player.js";

// global variables
let context;
let lastTickTimestamp;
let player;

// config object
const CONFIG = {
  width: 800,
  height: 600,
};

// initializes game, canvas, ...
const init = () => {
  let canvas = document.querySelector("canvas");
  context = canvas.getContext("2d");

  // size canvas according to config
  canvas.setAttribute("width", CONFIG.width);
  canvas.setAttribute("height", CONFIG.height);

  // our player
  player = new Player(context, 100, 100, CONFIG);

  // time since start of script execution
  lastTickTimestamp = performance.now();

  gameLoop();
};

const update = (timePassedSinceLastRender) => {
  // update our player
  player.update(timePassedSinceLastRender);
};

// renders to the canvas
const render = () => {
  // clear the canvas
  context.resetTransform();
  context.clearRect(0, 0, CONFIG.width, CONFIG.height);

  // render our player
  player.render();
};

// main game loop
const gameLoop = () => {
  let timePassedSinceLastRender = performance.now() - lastTickTimestamp;

  update(timePassedSinceLastRender);
  render();

  lastTickTimestamp = performance.now();
  requestAnimationFrame(gameLoop);
};

// execute init() on page load
window.addEventListener("load", () => {
  init();
});
