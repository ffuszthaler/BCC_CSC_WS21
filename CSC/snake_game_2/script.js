import { drawSquare, checkCollision, setBackground } from './js/Util.js';
import GLOBAL from './js/Globals.js';

GLOBAL.canvas = document.getElementById('canvas');
GLOBAL.ctx = canvas.getContext('2d');

let scoreCounter = document.getElementById('score');
let startBtn = document.getElementById('start');

let direction = '';
let directionQueue = '';

let fps = 120;

let snake = [];

let snakeLength = 5;

let snakeColor = '#3498db';
let foodColor = '#ff3636';

let foodX = [];
let foodY = [];

let food = {
  x: 0,
  y: 0,
};

let score = 0;

// let hit = new Audio('hit.wav');
// let pick = new Audio('pick.wav');

// pushes possible x and y positions to separate arrays
for (let i = 0; i <= GLOBAL.canvas.width - GLOBAL.cellSize; i += GLOBAL.cellSize) {
  foodX.push(i);
  foodY.push(i);
}

// makes GLOBAL.canvas interactive upon load
GLOBAL.canvas.setAttribute('tabindex', 1);
GLOBAL.canvas.style.outline = 'none';
//GLOBAL.canvas.focus();

// giving the food object its coordinates
const createFood = () => {
  food.x = foodX[Math.floor(Math.random() * foodX.length)]; // random x position from array
  food.y = foodY[Math.floor(Math.random() * foodY.length)]; // random y position from array

  // looping through the snake and checking if there is a collision
  for (let i = 0; i < snake.length; i++) {
    if (checkCollision(food.x, food.y, snake[i].x, snake[i].y)) {
      createFood();
    }
  }
};

// drawing food on the GLOBAL.canvas
const drawFood = () => {
  drawSquare(food.x, food.y, foodColor);
};

// creating the snake and pushing coordinates to the array
const createSnake = () => {
  snake = [];
  for (let i = snakeLength; i > 0; i--) {
    let k = i * GLOBAL.cellSize;
    snake.push({ x: k, y: 0 });
  }
};

// loops through the snake array and draws each element
const drawSnake = () => {
  for (let i = 0; i < snake.length; i++) {
    drawSquare(snake[i].x, snake[i].y, snakeColor);
  }
};

// keyboard interactions | direction != '...' doesn't let the snake go backwards
const changeDirection = (code) => {
  if (code == 'KeyA' && direction != 'right') {
    directionQueue = 'left';
  } else if (code == 'KeyW' && direction != 'down') {
    directionQueue = 'up';
  } else if (code == 'KeyD' && direction != 'left') {
    directionQueue = 'right';
  } else if (code == 'KeyS' && direction != 'top') {
    directionQueue = 'down';
  }
};

// changing the snake's movement
const moveSnake = () => {
  let x = snake[0].x; // getting the head coordinates
  let y = snake[0].y;

  direction = directionQueue;

  if (direction == 'right') {
    x += GLOBAL.cellSize;
  } else if (direction == 'left') {
    x -= GLOBAL.cellSize;
  } else if (direction == 'up') {
    y -= GLOBAL.cellSize;
  } else if (direction == 'down') {
    y += GLOBAL.cellSize;
  }

  // removes the tail and makes it the new head...very delicate, don't touch this
  var tail = snake.pop();
  tail.x = x;
  tail.y = y;
  snake.unshift(tail);
};

// main game loop
const game = () => {
  let head = snake[0];

  // checking for wall collisions
  if (
    head.x < 0 ||
    head.x > GLOBAL.canvas.width - GLOBAL.cellSize ||
    head.y < 0 ||
    head.y > GLOBAL.canvas.height - GLOBAL.cellSize
  ) {
    // hit.play();
    setBackground();
    createSnake();
    drawSnake();
    createFood();
    drawFood();
    directionQueue = 'right';
    score = 0;
  }

  // checking for collisions with snake's body
  for (let i = 1; i < snake.length; i++) {
    if (head.x == snake[i].x && head.y == snake[i].y) {
      // hit.play(); // playing sounds
      setBackground();
      createSnake();
      drawSnake();
      createFood();
      drawFood();
      directionQueue = 'right';
      score = 0;
    }
  }

  // checking for collision with food
  if (checkCollision(head.x, head.y, food.x, food.y)) {
    snake[snake.length] = { x: head.x, y: head.y };
    createFood();
    drawFood();
    // pick.play();
    score += 10;
  }

  GLOBAL.canvas.onkeydown = function (e) {
    e = e || window.event;
    changeDirection(e.code);
  };

  GLOBAL.ctx.beginPath();
  setBackground('#fff', '#eee');
  scoreCounter.innerHTML = score;
  drawSnake();
  drawFood();
  moveSnake();
};

const newGame = () => {
  direction = 'right'; // initial direction
  directionQueue = 'right';
  GLOBAL.ctx.beginPath();
  createSnake();
  createFood();

  if (typeof loop != 'undefined') {
    clearInterval(loop);
  } else {
    let loop = setInterval(game, fps);
  }
};

// newGame();
startBtn.addEventListener('click', () => {
  newGame();

  startBtn.style.display = 'none';
  scoreCounter.style.display = 'block';
});
