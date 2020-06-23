// In thi code we will be using new features of ES 6
// and also template literals

const country = "Bulgaria";
const city = "Sofia";

if (country.includes("Bulg")) {
  console.log("The country starts with Bulh");
}

if (city.startsWith("So")) {
  console.log("The name starts with So");
}
if (city.endsWith("a")) {
  console.log("The name ends with a");
}

// use template literals
console.log(
  `The capital of ${country}
    is the city of ${city}`
);
