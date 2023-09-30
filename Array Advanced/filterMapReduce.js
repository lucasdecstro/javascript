const numeros = [4, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pares = numeros
  .filter((value) => {
    return value % 2 === 0;
  })
  .map((value) => {
    return value * 2;
  })
  .reduce((ac, value) => {
    return ac + value;
  }, 0);

console.log(pares);
