class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  sayName() {
    console.log(`My name is: ${this.#name}`);
  }

  getName() {
    return this.#name;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    if (newName === "") {
      console.error("Name field of user cannot be empty.");
    } else {
      this.#name = newName;
    }
  }
}

class SpecialUser {
  static #MAX_INSTANCES = 3;
  static #instances = 0;

  constructor(name) {
    SpecialUser.#instances++;

    if (SpecialUser.#instances > SpecialUser.#MAX_INSTANCES) {
      console.error("Unable to create instance. Max limit reached!");
    } else {
      this.name = name;
    }
  }
}
