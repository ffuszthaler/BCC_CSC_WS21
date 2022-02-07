import GLOBAL from './js/Globals.js';
import { createRect } from './js/Util.js';

import Snake from './js/Snake.js';
import Collectible from './js/Collectible.js';

let playButton = document.getElementById('playButton');
let title = document.getElementById('title');

// set up start screen
playButton.addEventListener('click', () => {
  gameLoop();

  playButton.style.display = 'none';
  title.style.display = 'none';
});

// set up canvas & context
GLOBAL.canvas = document.getElementById('canvas');
GLOBAL.ctx = canvas.getContext('2d');

// our snake
GLOBAL.snake = new Snake(20, 20, 20);

// initial apple
GLOBAL.apple = new Collectible(20, 20, 20, 20, 'red');

const gameLoop = () => {
  setInterval(show, 1000 / 5); // here 5 is our fps value
};

const show = () => {
  update();
  render();
};

const update = () => {
  GLOBAL.ctx.clearRect(0, 0, GLOBAL.canvas.width, GLOBAL.canvas.height);

  GLOBAL.snake.update();
  GLOBAL.snake.eatApple();
};

const render = () => {
  // background
  createRect(0, 0, GLOBAL.canvas.width, GLOBAL.canvas.height, 'black');
  createRect(0, 0, GLOBAL.canvas.width, GLOBAL.canvas.height);

  // render snake according to its size
  for (let i = 0; i < GLOBAL.snake.tail.length; i++) {
    createRect(
      GLOBAL.snake.tail[i].x + 2.5,
      GLOBAL.snake.tail[i].y + 2.5,
      GLOBAL.snake.size - 5,
      GLOBAL.snake.size - 5,
      'white'
    );
  }

  // score counter
  GLOBAL.ctx.font = '20px Arial';
  GLOBAL.ctx.fillStyle = '#00FF42';
  GLOBAL.ctx.fillText('Score: ' + (GLOBAL.snake.tail.length - 1), GLOBAL.canvas.width - 120, 18);

  // render initial apple
  GLOBAL.apple.render();
};

// allow only one input when pressing
window.addEventListener('keydown', (event) => {
  if (event.code == 'KeyA' && GLOBAL.snake.rotateX != 1) {
    // left
    GLOBAL.snake.rotateX = -1;
    GLOBAL.snake.rotateY = 0;
  } else if (event.code == 'KeyW' && GLOBAL.snake.rotateY != 1) {
    // up
    GLOBAL.snake.rotateX = 0;
    GLOBAL.snake.rotateY = -1;
  } else if (event.code == 'KeyD' && GLOBAL.snake.rotateX != -1) {
    // right
    GLOBAL.snake.rotateX = 1;
    GLOBAL.snake.rotateY = 0;
  } else if (event.code == 'KeyS' && GLOBAL.snake.rotateY != -1) {
    // down
    GLOBAL.snake.rotateX = 0;
    GLOBAL.snake.rotateY = 1;
  }
});
