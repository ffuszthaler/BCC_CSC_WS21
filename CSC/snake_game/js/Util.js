import GLOBAL from './Globals.js';

function createRect(x, y, width, height, color) {
  GLOBAL.ctx.fillStyle = color;
  GLOBAL.ctx.fillRect(x, y, width, height);
}

export { createRect };
