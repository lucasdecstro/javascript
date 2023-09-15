// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1

num1 = (num1 * 100 + num2 * 100) / 100; // 'Correct'

num1 = parseFloat(num1.toFixed(2)); // or Number

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(num1.toString(2)); // binary
// console.log(num2.toFixed(1));
// console.log(Number.isInteger(num1));
// let temp = num1 * "Opa!";
// console.log(Number.isNaN(temp));
