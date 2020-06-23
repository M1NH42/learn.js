// In this module we'll be implementing string and interpolation included
// in ES 6
const language = "English";

console.log(language.includes("sh")); // returns true

console.log(language.startsWith("E"));
console.log(language.endsWith("h"));
console.log(language.repeat(3));

// we willbe template literals in ES6
console.log(`I speak ${language === "English" ? "British English" : "None"}`);
