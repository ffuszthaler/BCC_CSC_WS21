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

    // player state
    this.state = 'idle';
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

    // animation sprites
    this.sprites = {
      run: {
        src: './assets/run-sprite.png',
        frames: 8,
        fps: 20,
        frameSize: {
          width: 400,
          height: 400,
        },
        image: null,
      },
      idle: {
        src: './assets/idle-sprite.png',
        frames: 10,
        fps: 20,
        frameSize: {
          width: 400,
          height: 400,
        },
        image: null,
      },
    };

    // load images
    Object.values(this.sprites).forEach((sprite) => {
      sprite.image = new Image();
      sprite.image.src = sprite.src;
    });
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

    // bottom
    if (this.y + this.height / 2 > this.CONFIG.height) this.y = this.CONFIG.height - this.height / 2;
    // top
    else if (this.y - this.height / 2 < 0) this.y = 0 + this.height / 2;

    // change state depending on movement speed
    this.state = this.dx === 0 && this.dy === 0 ? 'idle' : 'run';

    // calculate new position
    this.x += timePassedSinceLastRender * this.dx * this.velocity;
    this.y += timePassedSinceLastRender * this.dy * this.velocity;
  }

  render() {
    // move canvas origin to x and y
    this.context.translate(this.x, this.y);

    // rotate sprite based on direction
    this.context.scale(this.lastDirection, 1);

    // get individual frame coordinates
    let coords = this.getImageSpriteCoordinates(this.sprites[this.state]);

    // draw player with running sprites
    this.context.drawImage(
      this.sprites[this.state].image, // src
      coords.sourceX, // source x
      coords.sourceY, // source y
      coords.sourceWidth, // source width
      coords.sourceHeight, // source height
      -this.width / 2, // dest x
      -this.height / 2, // dest y
      this.width, // dest width
      this.height // dest height
    );

    // reset any remaining transform call
    this.context.resetTransform();
  }

  getImageSpriteCoordinates(sprite) {
    // loop through frames
    let frameX = Math.floor(((performance.now() / 1000) * sprite.fps) % sprite.frames);

    let coords = {
      sourceX: frameX * sprite.frameSize.width,
      sourceY: 0,
      sourceWidth: sprite.frameSize.width,
      sourceHeight: sprite.frameSize.height,
    };

    return coords;
  }
}

export default Player;
