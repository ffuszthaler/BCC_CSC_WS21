class Superhuman {
  #name; // static variable
  #power = [];

  constructor(name, power = 'Flight') {
    this.#name = name;
    this.#power = power;
  }

  get name() {
    return this.#name;
  }
}

export default Superhuman;
