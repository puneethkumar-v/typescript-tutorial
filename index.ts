// DataTypes:

// Primitive DT:
let firstNumber = 1;
let str = "Puneeth";
let bool = true;

// Non-Primitive DT:
let arrayOfNumbers: number[] = [1, 2, 3];
let arrayOfStrings: string[] = ["Puneeth", "Kumar"];

// Types are defined to use a single source of object in multiple places
type firstObject = {
  firstNumber: number;
  str: string;
};

// Another way of defining an object
interface Point {
  x: number;
  y: number;
}

// Functions
function add(a: number, b: number): number {
  return a + b;
}
