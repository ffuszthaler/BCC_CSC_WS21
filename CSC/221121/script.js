// * /////////////// * //
// * Objects - cont. * //
// * /////////////// * //

const ironman = {
  name: "Tony Stark",
  alias: "IronMan",
  age: 45,
  abilities: ["Smart", "Money", "Fly", "Laser Gun"],
  attack: function (sound) {
    return `${this.alias} (attacks foe) - ${sound}`;
  },
};

// console.log(ironman.attack("PewPew"));

// ? Dynamically set the key name of object properties ? //
// ? let fruit = prompt("Which fruit should I buy 5 pieces of?", "apple");

// ? let bag = {
// ?   [fruit]: 5,
// ? };

// ? console.log(bag);

// * /////// * //
// * Classes * //
// * /////// * //

const userA = new User("Susan Storm");
console.log(userA.name);
userA.name = "Susan Richards";
console.log(userA.name);

const a = new SpecialUser("Ned Stark");
const b = new SpecialUser("Hodor");
const c = new SpecialUser("Little Finger");
const d = new SpecialUser("Arya Stark");
