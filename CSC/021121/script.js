console.log("live reload works!");

///////////
/* Loops */
///////////

////////////////
// While Loop
let i = 0;

while (i < 4) {
    console.log("While loop: " + i);
    // without this we get an infinite loop
    i++;
}
/////////////////////
// Do - While Loop
let j = 1;

do {
    console.log("the number is currently: " + j);
    j++;
} while (j <= 1);

//////////////
// For Loop
for (let i = 100; i > 0; i -= 10) {
    console.log("For loop: " + i);
}

/////////////////////
// For ... in loop
const person = {
    "first name": "Peter",
    surname: "Parker",
    alias: "Spiderman",
    age: 26,
};

for (let prop in person) {
    console.log(`The property is: ${prop} - The value is: ${person[prop]}`);
}

/////////////////////
// For ... of loop
let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

// ES6
// for (const char of alphabet) {
//     console.log(char);
// }

// The old ways
for (let index = 0; index < alphabet.length; index++) {
    console.log(alphabet[index]);
}

/////////////////////////
// Break out of a loop
let sum = 0;

while (sum <= 10000) {
    let value = +prompt("Enter a number!");

    if (!value) break;

    sum += value;
}

console.log(`Your sum would be: ${sum}`);

//////////////////////
// Continue keyword
for (let i = 0; i < 100; i++) {
    // if (i % 2 !== 0) {
    //     console.log(i);
    // }

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}
