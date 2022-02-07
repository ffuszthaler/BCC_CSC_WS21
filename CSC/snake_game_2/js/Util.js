import GLOBAL from './Globals.js';

// draws a square
export function drawSquare(x, y, color) {
  GLOBAL.ctx.fillStyle = color;
  GLOBAL.ctx.fillRect(x, y, GLOBAL.cellSize, GLOBAL.cellSize);
}

// checks if too coordinates match up
export function checkCollision(x1, y1, x2, y2) {
  if (x1 == x2 && y1 == y2) {
    return true;
  } else {
    return false;
  }
}

export function setBackground(color1, color2) {
  GLOBAL.ctx.fillStyle = color1;
  GLOBAL.ctx.strokeStyle = color2;

  GLOBAL.ctx.fillRect(0, 0, GLOBAL.canvas.height, GLOBAL.canvas.width);

  for (let x = 0.5; x < GLOBAL.canvas.width; x += GLOBAL.cellSize) {
    GLOBAL.ctx.moveTo(x, 0);
    GLOBAL.ctx.lineTo(x, GLOBAL.canvas.height);
  }
  for (let y = 0.5; y < GLOBAL.canvas.height; y += GLOBAL.cellSize) {
    GLOBAL.ctx.moveTo(0, y);
    GLOBAL.ctx.lineTo(GLOBAL.canvas.width, y);
  }

  GLOBAL.ctx.stroke();
}
