console.log("live reload seems to work!");

let consoleDiv = document.getElementById("console");
consoleDiv.setAttribute("title", "Console");
consoleDiv.innerHTML = "<center><h1><strong>hi</strong></h1></center>"

// String conversion
let val = 42;
console.log(typeof val);
val = val.toString();
console.log(typeof val);

// Boolean Conversion
console.log(Boolean('text'));
console.log(Boolean(0));
console.log(Boolean(''));

////////////////
/// Operator ///
////////////////

// Unary Operators -> require one operand (typeof, !)
// Bynary Operators -> require two operands (+, -, *, /, %)
// Ternary Operators -> require three operands (?)

//////////////////////////////
/// Mathematical Operators ///
//////////////////////////////

// Addition +
console.log(5 + 3);
console.log(5.2 + 3.3);

let userName = 'Florian';
userName = userName + ' ' + 'Fußthaler';
console.log(userName);
console.log(3 + '1');
console.log(+'42');

// Substraction -
console.log(7 - 6);
console.log('7' - 6);

// Multiplication *
console.log(4 * 3);
console.log('4' * 3);

// Division /
console.log(10 / 2);
console.log('10' / 2);

// Exponentiation
console.log(3 ** 4);

// Modulo
console.log(5 % 2);
console.log(8 % 5);

console.log('///////////////////////////////////////////////////////////////');

/////////////////////////
/// Modify and assign ///
/////////////////////////

let age = 30;

// +=
console.log(age += 5);

// -=
console.log(age -= 8);

///////////////////////////////
/// Increment and decrement ///
///////////////////////////////

let counter = 1;
console.log(++counter);
console.log(--counter);