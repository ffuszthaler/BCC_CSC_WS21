import Superhuman from './Superhuman.js';

class Hero extends Superhuman {
  villainsFought = [];

  constructor(name, power, vFought) {
    super(name, power);
    this.villainsFought = vFought;
  }
}

export default Hero;
