const a1 = [1, 2, 3, 5, 7];

// for (let valor of a1) {
//   console.log(valor);
// }

let total = 0;

a1.forEach((valor) => {
  total += valor;
});

console.log(total);
