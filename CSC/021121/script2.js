/*
 * Functions
 */

// * Function without paramters
function sayHello() {
    console.log("hello");
}

// * Calling a function
sayHello();

// * Basic function with parameters
function saySometing(message = "goodbye", whisper = false) {
    if (whisper) {
        console.log(`%c ${message}`, "font-size: 5px");
    } else {
        console.log(message);
    }
}

saySometing("whats up?", "there");
saySometing();

// * Attach Event listeners
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log("you clicked me");
    document.body.style.backgroundColor = "cornFlowerBlue";
});
