import GLOBAL from './js/Globals.js';
import { createRect } from './js/Util.js';

import Snake from './js/Snake.js';
import Collectible from './js/Collectible.js';

let playButton = document.getElementById('playButton');
let title = document.getElementById('title');
let dead = document.getElementById('dead');

// set up start screen
playButton.addEventListener('click', () => {
  gameLoop();

  playButton.style.display = 'none';
  title.style.display = 'none';
});

GLOBAL.actors = [];

// set up canvas & context
GLOBAL.canvas = document.getElementById('canvas');
GLOBAL.ctx = canvas.getContext('2d');

// our snake
GLOBAL.snake = new Snake(40, 40, 20);
GLOBAL.actors.push(GLOBAL.snake);

// initial apple
GLOBAL.apple = new Collectible(20, 20, 20, 20, 'red');

const gameLoop = () => {
  // slow down game to a lower framerate
  // to be more like the original
  setInterval(show, 1000 / 5); // fps: 5
};

const show = () => {
  update();
  render();
};

const update = () => {
  GLOBAL.ctx.clearRect(0, 0, GLOBAL.canvas.width, GLOBAL.canvas.height);

  GLOBAL.actors.forEach((actor) => {
    actor.update();
    actor.eatApple();
  });

  // snake eats itself
  // start at index 1 eg. first real tail part
  for (let i = 1; i < GLOBAL.snake.tail.length; i++) {
    if (GLOBAL.snake.tail[0].x === GLOBAL.snake.tail[i].x && GLOBAL.snake.tail[0].y === GLOBAL.snake.tail[i].y) {
      console.log('head: ', GLOBAL.snake.tail[0], 'body: ', GLOBAL.snake.tail);
      // GLOBAL.actors.splice(0, 1);
    }
  }

  // if the snake is dead, hide game, show death message
  if (GLOBAL.actors.length === 0) {
    GLOBAL.canvas.style.display = 'none';
    dead.style.display = 'block';
  }
};

const render = () => {
  // background
  createRect(0, 0, GLOBAL.canvas.width, GLOBAL.canvas.height, 'black');

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
  GLOBAL.ctx.font = 'bold 20px Arial';
  GLOBAL.ctx.fillStyle = '#FFFFFF';
  GLOBAL.ctx.fillText('Score: ' + (GLOBAL.snake.tail.length - 1), 10, 30);

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
