// Task 3: Variable const and immutability

// let keyword will not let us redeclare the variable again
// that is not the case with the var keyword

// let paintingName = "The Starry Nights";
// console.log(paintingName);

// let paintingName = "The Night Cafe";
// console.log(paintingName);

const paintingNames = ["The Starry Night", "The Night Cafe"];

console.log(paintingNames);

// but the values of const can be immutable
paintingNames.push("Irises");

console.log(paintingNames);

// but we cannot reassign new value to a const variable
// which will throw an error for that
// paintingNames = [];

const paintingInfo = {
  nameOfPainting: "Starry Night",
  nameOfPainter: "Van Gogh",
};

paintingInfo.year = 1889;

// we can also modify the existing value
paintingInfo.nameOfPainter = "Minhaz Alam";

console.log(paintingInfo);
