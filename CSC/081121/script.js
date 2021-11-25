console.log("hi");

let userName = "user123";

function sayHello() {
  let userName = "user123312";
  let msg = `Hello ${userName}!`;
  console.log(msg);
}
sayHello();
console.log(userName);

// * Function declaration
function sum(a, b) {
  let res = a + b;
  return res;
}
console.log(sum(3, 5));
console.log(sum(55, 99));
////

// * Function expression
const getSum = function (a, b) {
  return a + b;
};

const copy = getSum;
console.log(getSum(10, 8));
console.log(copy(4, 5));
////

// * Arrow Function
const calcSum = (a, b) => a + b;

console.log(calcSum(3, 1));
////

// * Callbacks
const askQuestion = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

const onOk = () => {
  console.log("you agreed to it!");
};

const onCancel = () => {
  console.log("you did not agree to it!");
};

askQuestion("Should we eat mor of the cake", onOk, onCancel);
////
