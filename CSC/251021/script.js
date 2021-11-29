console.log('live reload work!');

// let num = 42;
// num += 8;
// console.log(num);

// // Increment and Decrement
// let counter = 0;
// console.log(++counter);
// console.log(counter++);

//////////////////////////////////////////////////////////////////

/*
    Logical Operators
*/

// AND - &&
// let res = 2 > 1 && Boolean('Hello');
// console.log(res);

// // OR - ||
// res = 2 > 1 || 3 > 4;
// console.log(res);

// // NOT - !
// res = !(2 > 1);
// console.log(res);

// // BANG - !!
// console.log(!!123); // Boolean(123);

//////////////////////////////////////////////////////////////////

/*
    Comparison Operators
*/

// let userName = 'Florian';
// let usName = 'Florian';

// // == -> does not check for data type
// console.log(1 == 1);

// // === -> checks for data type
// console.log(1 === 1);
// console.log('1' === 1);
// console.log(userName === usName);

// // do not use
// console.log('1' != 1);

// // use
// console.log('1' !== 1);

// // Greater equals than
// console.log(1 >= 2);

// // Lesser quals than
// console.log(3 <= 3);

// // Comparing strings
// console.log('A' === 'a');
// console.log('Abc' > 'Te');

//////////////////////////////////////////////////////////////////

/*
    Coditionals
*/

// let answer = prompt('are you stupid?');

// if (answer) {
//     alert('YOU ARE');
// } else {
//     alert('YOU STILL ARE');
// }

const admin = 'Florian';

if (admin) {
    console.log('hi');
}