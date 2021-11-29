// * Declare an Object
let userA = new Object();
let userB = {};

// console.log(userA, userB);

const hero = {
  "full name": "Bruce Wayne",
  name: "Brucee",
  alias: "Batman",
  catchphrase: "I AM BATMAN",
  age: 50,
  foes: ["Joker", "Penguin", "The Riddler"],
};

// console.log(hero["full name"]);
// console.log(hero.catchphrase);

const batman = hero;

batman.age = 20;

// console.log(hero);
// console.log(batman);

hero.attack = function (sound) {
  return `punches villain (${sound})`;
};

console.log(hero.attack("POW"));

delete hero.name;
console.log(hero);
