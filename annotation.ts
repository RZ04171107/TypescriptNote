// Type annotation: code we add to tell Typescript what type of value a variable will refer to

// Type inference: Typescript tries to figure out what type of value a variable refers to

//======================= annotation ==================

let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// build in object
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
// : (i: number) => void means the argument i should be number and this function returns void

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initalizate it later
let words = ["red", "green", "blue"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 13];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

// Type annotations for functions:
// Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return

const add = (a: number, b: number) => {
  return a + b;
};

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const forecast = {
  data: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { data: Date; weather: string }): void => {
  console.log(forecast.data);
  console.log(forecast.weather);
};

// Destructuring with annotation

// ES2015
// const logWeather2 = ({data, weather}) => {
//   console.log(data)
//   console.log(weather)
// }

const logWeather2 = ({
  data,
  weather,
}: {
  data: Date;
  weather: string;
}): void => {
  console.log(data);
  console.log(weather);
};

// Annotations around Objects
const profile = {
  name: "Alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Distructure
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
