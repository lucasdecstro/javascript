// alert("Stop!");

// window.alert(''); << Undefined
// window.confirm(''); << Boolean
// window.prompt(''); << String

// let confirma = confirm("Opa!");
// undefined
// console.log(confirma); // Boolean

let num1 = prompt("Type a number");
let num2 = prompt("Type a number");

// console.log(typeof num1, typeof num2);

num1 = Number(num1);
num2 = Number(num2);

const result = num1 + num2;
alert(`O resultado foi ${result}!`); // ${num1 + num2}
