import GameObject from './GameObject.js';

class Player extends GameObject {
  constructor(context, x, y, width, height, CONFIG) {
    super(context, x, y, width, height, CONFIG);

    // movement direction
    this.dx = 0;
    this.dy = 0;

    // player movement speed multiplier
    this.velocity = 0.3;

    // last direction the player looked
    this.lastDirection = 1;

    // saves all currently pressed keys
    this.currentKeys = {};
  }

  init() {
    document.addEventListener('keydown', (e) => {
      // prevents scrolling
      e.preventDefault();
      this.currentKeys[e.code] = true;
    });

    document.addEventListener('keyup', (e) => {
      this.currentKeys[e.code] = false;
    });

    // load player image
    this.playerImg = new Image();
    this.playerImg.src = './assets/run-still.png';
  }

  update(timePassedSinceLastRender) {
    if (this.currentKeys['ArrowUp'] === true || this.currentKeys['KeyW'] === true) {
      this.dy = -1;
    } else if (this.currentKeys['ArrowDown'] === true || this.currentKeys['KeyS'] === true) {
      this.dy = 1;
    } else {
      this.dy = 0;
    }

    if (this.currentKeys['ArrowLeft'] === true || this.currentKeys['KeyA'] === true) {
      this.dx = -1;
    } else if (this.currentKeys['ArrowRight'] === true || this.currentKeys['KeyD'] === true) {
      this.dx = 1;
    } else {
      this.dx = 0;
    }

    // save last view direction
    if (this.dx != 0) this.lastDirection = this.dx;

    // bounds detection
    // right
    if (this.x + this.width / 2 > this.CONFIG.width) this.x = this.CONFIG.width - this.width / 2;
    // left
    else if (this.x - this.width / 2 < 0) this.x = 0 + this.width / 2;
    // if (this.x < this.width / 2) this.x = this.width / 2; // left

    // bottom
    if (this.y + this.height / 2 > this.CONFIG.height) this.y = this.CONFIG.height - this.height / 2;
    // top
    else if (this.y - this.height / 2 < 0) this.y = 0 + this.height / 2;
    // if (this.y < this.height / 2) this.y = this.height / 2; // top

    // calculate new position
    this.x += timePassedSinceLastRender * this.dx * this.velocity;
    this.y += timePassedSinceLastRender * this.dy * this.velocity;
  }

  render() {
    // move canvas origin to x and y
    this.context.translate(this.x, this.y);

    // rotate sprite based on direction
    this.context.scale(this.lastDirection, 1);

    // draw player
    this.context.drawImage(this.playerImg, -this.width / 2, -this.height / 2, this.width, this.height);

    // reset any remaining transform call
    this.context.resetTransform();
  }
}

export default Player;
