// global variables
let context;
let ticks = 0;
let x = 0;
let lastTickTimestamp;

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

  // time since start of script execution
  lastTickTimestamp = performance.now();
  render();
};

// renders to canvas
const render = () => {
  let timePassedSinceLastRender = performance.now() - lastTickTimestamp;
  window.timePassedSinceLastRender = timePassedSinceLastRender;

  x = x + timePassedSinceLastRender / 4;

  context.resetTransform();
  context.clearRect(0, 0, CONFIG.width, CONFIG.height);
  context.translate(x, 0);
  context.fillRect(0, 0, 50, 50);

  ticks++;
  lastTickTimestamp = performance.now();
  requestAnimationFrame(render);
};

// execute init() on page load
window.addEventListener("load", () => {
  init();
});
