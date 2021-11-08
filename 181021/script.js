// console.log("hi");

// special data types
// let a;
// console.log(typeof a);

// let b = null;
// console.log(typeof b);

// complex data types
// const obj = {
//     username: 'fcrzntx',
//     "first-name": 'peter',
//     "second-name": 'parker',
//     age: 26,
// };
// console.log(obj);
// console.log(obj.username);
// console.log(obj['first-name']);
// console.log(typeof obj);

// let array = [1, 2, 3, 4, 5, 6];
// console.log(array[4]);

// let array2 = [1, 'Hello', 3, obj];
// console.log(array2[3]['second-name']);

////////////////////////////////
// Chapter: Generating output //
////////////////////////////////

// 1) Console
console.log("%c Good Morning!", "background-color: orange; font-size: 30px; color: #222531;");


// 2) Dialog Boxes
// alert dialog
// alert("hi");
// console.log('now you see me');

// Prompt Dialog
// let myName = prompt("name?");
// console.log(myName);

// Confirm Dialog
// let aMan = confirm("you a man");
// console.log(aMan);


// 3) Output HTML to DOM
let div = document.getElementById("console");
div.setAttribute("title", "Hover me!");
div.innerText = "first JS to DOM interaction";