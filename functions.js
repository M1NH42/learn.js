// write reusable code with the help of the functions

function printMessage() {
  console.log("JavaScript is Awesome!!");
}

// function invoke/ called
// printMessage();

function findDivision(a, b) {
  console.log(a / b);
}

// findDivision(123, 74);

/* Scole resolution of the variables */
function calculateSum(a, b) {
  // sumOfTwoNumbers is local to this function only
  // if you want to access it outside this function
  // it will throw error that this is not define.
  // calculate sum of a and b and store into the sumOfTwoNumbers var

  var sumOfTwoNumbers = a + b;
  // calculate sum of a and b and store into the sumOfTwoNumbers var
  console.log(sumOfTwoNumbers);
}

// called sum
calculateSum(12, 78);

// this will throw an error saying sumOfTwoNumbers is
// not defined in this scope
// console.log(sumOfTwoNumbers);

// global vs local

// global variable
var outerWear = "T-Shirt";

function myOutfit() {
  // this local variable overwrites the global variable
  var outerWear = "Sweater";
  return outerWear;
}

console.log(myOutfit()); // returns the variable local to that function only

// prints variable with global scope var
console.log(outerWear); // will print the global variable

// function o return the remainder of the given numbers
function returnModulo(a, b) {
  return a % b;
}
