/*
 * Arithmetics operators
 * + Addition | Concatenation
 * - Subtraction
 * * Multiplication
 * / Division
 * ** Exponentiation
 * % Modulus (Remainder)
 * ++ Increment
 * -- Decrement
 * += -= **= ... ><
 * Nan = Not a number
 * () -> ** -> / -> * -> + / -
 */

let counter = 1;
counter++; // = 2
console.log(counter);

let counterOne = 5;
counterOne--; // = 4
console.log(counterOne);

const step = 3;
let counterTwo = 0;

counterTwo += step;
counterTwo **= step; // 6
console.log(counterTwo);


const num1 = 5;
const num2 = 10;
console.log(num1 % num2);

// parseInt parseFloat Number

const a = 20;
const b = parseInt('5.2'); // parseFloat = 25.2

console.log(a + b)
