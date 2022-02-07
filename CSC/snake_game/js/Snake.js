import GLOBAL from './Globals.js';

import Collectible from './Collectible.js';

class Snake {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;

    this.size = size;

    this.tail = [{ x: this.x, y: this.y }];

    this.rotateX = 0;
    this.rotateY = 1;
  }

  update() {
    let newRect;

    if (this.rotateX == 1) {
      newRect = {
        x: this.tail[this.tail.length - 1].x + this.size,
        y: this.tail[this.tail.length - 1].y,
      };
    } else if (this.rotateX == -1) {
      newRect = {
        x: this.tail[this.tail.length - 1].x - this.size,
        y: this.tail[this.tail.length - 1].y,
      };
    } else if (this.rotateY == 1) {
      newRect = {
        x: this.tail[this.tail.length - 1].x,
        y: this.tail[this.tail.length - 1].y + this.size,
      };
    } else if (this.rotateY == -1) {
      newRect = {
        x: this.tail[this.tail.length - 1].x,
        y: this.tail[this.tail.length - 1].y - this.size,
      };
    }

    this.tail.shift();
    this.tail.push(newRect);

    // wall hit detection
    let headTail = GLOBAL.snake.tail[GLOBAL.snake.tail.length - 1];

    if (headTail.x == -GLOBAL.snake.size) {
      // headTail.x = GLOBAL.canvas.width - GLOBAL.snake.size;
      GLOBAL.actors.splice(0, 1);
    } else if (headTail.x == GLOBAL.canvas.width) {
      // headTail.x = 0;
      GLOBAL.actors.splice(0, 1);
    } else if (headTail.y == -GLOBAL.snake.size) {
      // headTail.y = GLOBAL.canvas.height - GLOBAL.snake.size;
      GLOBAL.actors.splice(0, 1);
    } else if (headTail.y == GLOBAL.canvas.height) {
      // headTail.y = 0;
      GLOBAL.actors.splice(0, 1);
    }
  }

  eatApple() {
    if (
      GLOBAL.snake.tail[GLOBAL.snake.tail.length - 1].x == GLOBAL.apple.x &&
      GLOBAL.snake.tail[GLOBAL.snake.tail.length - 1].y == GLOBAL.apple.y
    ) {
      // make tail bigger if apple gets eaten
      GLOBAL.snake.tail[GLOBAL.snake.tail.length] = { x: GLOBAL.apple.x, y: GLOBAL.apple.y };

      // after old apple gets eaten, spawn a new one
      GLOBAL.apple = new Collectible(20, 20, 20, 20, 'red');
      GLOBAL.apple.render();
    }
  }
}

export default Snake;
