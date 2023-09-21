// const fizzBuzz = (numbers) => {
//   if (!Array.isArray(numbers)) {
//     return "Forneça um array de números.";
//   }

//   const result = [];

//   numbers.forEach((number) => {
//     if (
//       typeof number !== "number" ||
//       isNaN(number) ||
//       number < 0 ||
//       number > 100
//     ) {
//       result.push("Digite um número válido.");
//     }

//     if (number % 3 === 0 && number % 5 === 0) {
//       result.push("FizzBuzz");
//     } else if (number % 3 === 0) {
//       result.push("Fizz");
//     } else if (number % 5 === 0) {
//       result.push("Buzz");
//     } else {
//       result.push(number);
//     }
//   });

//   return result;
// };

// const arrayNumeros = [10, 5];

// console.log(fizzBuzz(arrayNumeros));

function fizzBuzz(n) {
  if (typeof n !== "number" || isNaN(n) || n < 0 || n > 100) {
    return "Digite um número válido de 0 a 100.";
  }

  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n;
  }
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
