console.log('live reload works.');

/*
    if statement
*/

// let answer= prompt('Age yours is what?');

// if (+answer) {
//     alert(`Age yours is ${answer}`);
// }

//////////////////////////////////////////////////////

/*
    if ... else statement
*/

// const now = new Date();
// const day = now.getDay();
const day = Math.floor(Math.random() * 7);

// if (day === 3) {
//     console.log('it is wednesday my dudes, aaaaaaaaaaaaaah');
// } else {
//     console.log('it is a different day my dudes, aaaaaaaaaaaaaah');
// }

//////////////////////////////////////////////////////

/*
    ternary operator: ?
*/

// let answer= prompt('what is the cloud coverage? (0% - 100%)');
// let weatherCond = +answer > 40 ? 'cloudy' : 'sunny';

// if (+answer > 40) {
//     weatherCond = 'cloudy';
// } else {
//     weatherCond = 'sunny';    
// }

// console.log(`It's a ${weatherCond} day`);

//////////////////////////////////////////////////////

/*
    if ... else ... else if statement
*/

// if (day === 6 || day === 0) {
//     console.log('have a nice weekend');
    
// } else if (day === 1) {
//     console.log('your monday will be great');

// } else if (day === 3) {
//     console.log('it is wednesday my dudes, aaaaaaaaaaaaaah');
// } else {
//     console.log('just a normal day');
// }

//////////////////////////////////////////////////////

/*
    switch ... case statement
*/

let currentDay = '...';
let weekday = document.getElementById('weekday');

switch (day) {
    case 0:
        currentDay = 'Sunday';
        break;
    case 1:
        currentDay = 'Monday';
        break;
    case 2:
        currentDay = 'Tuesday';
        break;
    case 3:
        currentDay = 'Wednesday';
        break;
    case 4:
        currentDay = 'Thursday';
        break;
    case 5:
        currentDay = 'Friday';
        break;
    case 6:
        currentDay = 'Saturday';
        break;
    default:
        break;
}

weekday.innerText = currentDay;