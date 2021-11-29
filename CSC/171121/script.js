// * Declare an array
const array = [1, 2, 3, "Name", undefined, NaN, 3.1415];
const array2 = new Array(1, 2, 3, "Name", "Mango", "Apple");

// ? Creates a memory reference to the variable
// ? console.log({ array, array2 });

// console.log("array: ", array);
// console.log("array2: ", array2);

// * Accessing // Modifying
// console.log(array2[5]);

// ! DON'T DO THIS
// ! array2[100] = "Florian";
// ! console.log(array2);

array2[3] = "Florian";
// console.log(array2.length);

// * Complex Arrays
let complexArray = [
  1,
  10,
  [200, 400, 500, "Hello"],
  () => console.log("Hello World"),
];
// console.log(complexArray);

// console.log(complexArray[2][3]);
// complexArray[3]();

// * Looping Array
// for (let el of array) {
//   document.write(el + "<br />");
// }

// * ///////////// * //
// * Array Methods * //
// * ///////////// * //
let colors = ["red", "green", "blue"];
colors.push("yellow");
colors.unshift("purple");
// console.log(colors);

let el = colors.pop();
// console.log(el);
// console.log(colors);

el = colors.shift();
// console.log(el);
// console.log(colors);

// * Looping Arrays
colors.forEach((item, index, array) => {
  let msg = `${item} is at the index ${index} in the array: ${array}`;
  document.write(msg + "<br /><br />");
});

// * Remove specific element
let removedEl = colors.splice(1, 2);
// console.log(removedEl);

// * Slice and Concat
let pets = ["🐱", "🐶", "🐹"];
let wilds = ["🐯", "🐺", "🦒"];
let bugs = ["🦗", "🦋", "🐝"];

let mammals = pets.concat(wilds);
console.log(mammals);

let animals = pets.concat(bugs, wilds);
console.log(animals);

// * Filter Method
let numbers = [1, 2, 3, 4, 7, 8, 2, 8, 1, 5, 2, 4];
let res = numbers.filter((el) => {
  return el > 4;
});

console.log(res);

// * Map Method
console.log("Original: " + colors);
let upperCaseColors = colors.map((el) => {
  return el.toUpperCase();
});

console.log(upperCaseColors);
