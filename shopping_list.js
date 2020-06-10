/* We'll be implementing the shopping list in javascript */
// nestes arrays : array of arrays

var myList = [
  ["milk", 2],
  ["tomatoes", 3],
  ["onion", 1],
  ["eggs", 12],
  ["bread", 2],
];

// adds at the end of the list
myList.push(["butter", 2]);

// nested array
console.log(myList[myList.length - 1]);
