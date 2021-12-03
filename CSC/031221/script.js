import Superhuman from './classes/Superhuman.js';
import Hero from './classes/Hero.js';
import { flattenNestedArray } from './util.js';

setTimeout(() => {
  console.log('hello');
}, 2000);

let sup = new Superhuman('Clark Kent', ['Laser Eyes', 'Flying', 'Strength']);
console.log(sup);

let batman = new Hero('Bruce Wayne', ['Money'], ['Joker', 'Poison Ivy', 'Mr. Freeze']);
console.log(batman);
console.log(batman.name);

console.log(batman instanceof Hero);
console.log(batman instanceof Superhuman);
console.log(sup instanceof Hero);
