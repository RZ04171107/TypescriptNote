// Typed Arrays:
// Arrays where each element is some consistent type of value

const carMakers = ["ford", "toyota", "chevy"];
// when initializing the array
// const carMakers: string[] = []

const carsByMake = [["f150"], ["corolla"], ["camaro"]];
// when initializing a 2d array:  const carsByMake: string[][] = []

// Help with inference when extracting values
const car1 = carMakers[0]; // mouse hover -> car1: string

// Prevent incompletible values
//carMakers.push(100); -> will have error

// Help with build-in functions
carMakers.map((elem: string): string => {
  return elem.toUpperCase();
});

// Multiple types
const importantDates = [new Date(), "2030-10-10"];

// Tuples: array-like structure where each element represents some property of a record

const drinkObject = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};
const drinkArray = ["brown", true, 40];

// Type alias
type Drink = [string, boolean, number];

const drinkTuple: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 45];
const tea: Drink = ["green", false, 0];
