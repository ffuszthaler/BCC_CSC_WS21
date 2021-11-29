console.log("Live Reload seems to work fine");

const helloButton = document.getElementById("helloBtn");

function helloFunc() {
    console.log("Hello");
}

helloButton.addEventListener("click", helloFunc);

let age = 21;
console.log("I'm " + age + " years old");

const id = 1234;
console.log(id);

console.log(typeof(id));

console.log(
`
My age is ${age}
My id is ${id}

${1 + 1}

The quick brown fox jumps over the lazy dog.

`
);