const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let startButton = document.getElementById('start');
let instructions = document.getElementById('instructions');
let restartButton = document.getElementById('restart');
let deathMsg = document.getElementById('deathMsg');

class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

let headX = 10;
let headY = 10;
const snakeParts = [];
let tailLength = 2;

let appleX = 5;
let appleY = 5;

let inputsXVelocity = 0;
let inputsYVelocity = 0;

let xVelocity = 0;
let yVelocity = 0;

let score = 0;

const eat = new Audio('./sound/eat.wav');
const over = new Audio('./sound/over.wav');

//game loop
function drawGame() {
  xVelocity = inputsXVelocity;
  yVelocity = inputsYVelocity;

  changeSnakePosition();

  // if player is dead
  let result = isGameOver();

  if (result) {
    over.play();
    // hide game & show death message
    canvas.style.display = 'none';
    deathMsg.style.display = 'block';

    // show restart button
    restartButton.style.display = 'block';
    return;
  }

  clearScreen();

  checkAppleCollision();

  drawApple();
  drawSnake();
  drawScore();

  // lower the game speed
  setTimeout(drawGame, 1000 / speed);
}

function isGameOver() {
  let gameOver = false;

  if (yVelocity === 0 && xVelocity === 0) {
    return false;
  }

  //walls
  if (headX < 0) {
    gameOver = true;
  } else if (headX === tileCount) {
    gameOver = true;
  } else if (headY < 0) {
    gameOver = true;
  } else if (headY === tileCount) {
    gameOver = true;
  }

  // snake eats itself
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];

    if (part.x === headX && part.y === headY) {
      gameOver = true;
      break;
    }
  }

  // if game is over, display it
  // if (gameOver) {
  //   ctx.fillStyle = 'white';
  //   ctx.font = '50px Arial';

  //   ctx.fillText('Game Over!', canvas.width / 6.5, canvas.height / 2);
  // }

  return gameOver;
}

// draw the score
function drawScore() {
  ctx.fillStyle = 'black';
  ctx.font = 'bold 20px Arial';
  ctx.fillText('Pts: ' + score, 10, 25);
}

// clear screen before new frame
function clearScreen() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// draw the snake and every newly added tail part
function drawSnake() {
  ctx.fillStyle = 'green';
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  //put an item at the end of the list next to the head
  snakeParts.push(new SnakePart(headX, headY));
  while (snakeParts.length > tailLength) {
    // remove the furthest item from the snake parts if have more than our tail size.
    snakeParts.shift();
  }

  // head will be a different color
  ctx.fillStyle = 'orange';
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

// make snake move
function changeSnakePosition() {
  headX = headX + xVelocity;
  headY = headY + yVelocity;
}

// draw apple
function drawApple() {
  ctx.fillStyle = 'red';
  ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

// check for apple collision and calculate new apple position
function checkAppleCollision() {
  if (appleX === headX && appleY == headY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);

    // make snake bigger
    tailLength++;

    // increase score
    score++;

    // play eat sound
    eat.play();
  }
}

// movement using either gamer keys or arrow keys
document.body.addEventListener('keydown', (e) => {
  if (e.code == 'ArrowUp' || e.code == 'KeyW') {
    // if already the opposite, do nothing
    if (inputsYVelocity == 1) return;
    inputsYVelocity = -1;
    inputsXVelocity = 0;
  }

  if (e.code == 'ArrowDown' || e.code == 'KeyS') {
    // if already the opposite, do nothing
    if (inputsYVelocity == -1) return;
    inputsYVelocity = 1;
    inputsXVelocity = 0;
  }

  if (e.code == 'ArrowLeft' || e.code == 'KeyA') {
    // if already the opposite, do nothing
    if (inputsXVelocity == 1) return;
    inputsYVelocity = 0;
    inputsXVelocity = -1;
  }

  if (e.code == 'ArrowRight' || e.code == 'KeyD') {
    // if already the opposite, do nothing
    if (inputsXVelocity == -1) return;
    inputsYVelocity = 0;
    inputsXVelocity = 1;
  }
});

// start button
startButton.addEventListener('click', () => {
  // start game
  drawGame();

  // hide start button afterwards
  startButton.style.display = 'none';
  instructions.style.display = 'block';
  canvas.style.display = 'block';
});

restartButton.addEventListener('click', () => {
  // restart game
  location.reload();
});
