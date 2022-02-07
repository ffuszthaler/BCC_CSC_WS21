import GLOBAL from './Globals.js';

class Collectible {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    this.color = color;

    this.x = Math.floor((Math.random() * GLOBAL.canvas.width) / GLOBAL.snake.size) * GLOBAL.snake.size;
    this.y = Math.floor((Math.random() * GLOBAL.canvas.height) / GLOBAL.snake.size) * GLOBAL.snake.size;
  }

  render() {
    GLOBAL.ctx.fillStyle = this.color;
    GLOBAL.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Collectible;
