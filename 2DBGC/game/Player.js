class Player {
  constructor(context, x, y, config) {
    // canvas context
    this.context = context;

    // canvas config
    this.config = config;
    // position
    this.x = x;
    this.y = y;

    // movement direction
    this.dx = 0;
    this.dy = 0;

    // player movement speed multiplier
    this.velocity = 0.2;

    // texture size
    this.width = 100;
    this.height = 100;

    // last direction the player looked
    this.lastDirection = 1;

    // saves all currently pressed keys
    this.currentKeys = {};

    this.init();
  }

  init() {
    document.addEventListener('keydown', (e) => {
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

  render() {
    // reset any remaining transform call
    this.context.resetTransform();

    // move canvas origin to x and y
    this.context.translate(this.x, this.y);

    // rotate sprite based on direction
    this.context.scale(this.lastDirection, 1);

    // draw player
    this.context.drawImage(this.playerImg, -this.width / 2, -this.height / 2, this.width, this.height);
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
    if (this.x <= this.width / 2) this.x = this.width / 2 + 1;
    if (this.y <= this.height / 2) this.y = this.height / 2 + 1;
    if (this.y >= this.config.height - this.height / 2) this.y = this.config.height - this.height / 2 - 1;
    if (this.x >= this.config.width - this.width / 2) this.x = this.config.width - this.width / 2 - 1;

    // calculate new position
    this.x += timePassedSinceLastRender * this.dx * this.velocity;
    this.y += timePassedSinceLastRender * this.dy * this.velocity;
  }
}

export default Player;
