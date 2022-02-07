import GLOBAL from './Globals.js';

class Collectible {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    this.color = color;

    let isTouching;

    while (true) {
      isTouching = false;
      this.x = Math.floor((Math.random() * canvas.width) / GLOBAL.snake.size) * GLOBAL.snake.size;
      this.y = Math.floor((Math.random() * canvas.height) / GLOBAL.snake.size) * GLOBAL.snake.size;

      for (let i = 0; i < GLOBAL.snake.tail.length; i++) {
        if (this.x == GLOBAL.snake.tail[i].x && this.y == GLOBAL.snake.tail[i].y) {
          isTouching = true;
        }
      }

      this.size = GLOBAL.snake.size;
      this.color = 'red';

      if (!isTouching) {
        break;
      }
    }
  }

  render() {
    GLOBAL.ctx.fillStyle = this.color;
    GLOBAL.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Collectible;
