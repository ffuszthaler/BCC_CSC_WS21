import GameObject from './GameObject.js';

class PointsDisplay extends GameObject {
  constructor(context, x, y) {
    super(context, x, y);

    this.points = 0;
  }

  increase() {
    this.points++;
  }

  init() {}

  update() {}

  render() {
    // circle background
    this.context.fillStyle = 'rebeccapurple';
    this.context.beginPath();
    this.context.ellipse(this.x + 8, this.y - 15, 35, 35, 2 * Math.PI, 0, 2 * Math.PI);
    this.context.fill();
    this.context.closePath();

    // text foreground
    this.context.fillStyle = 'white';
    this.context.font = 'bold 30px monospace';
    this.context.textAlign = 'center';
    this.context.fillText(this.points, this.x, this.y);

    // reset any remaining transform call
    this.context.resetTransform();
  }
}

export default PointsDisplay;
