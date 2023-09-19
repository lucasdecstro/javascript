// Atribuição via desestruturação

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ... rest, ...spread

const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [, [, , seis]] = numbers;
console.log(seis);
