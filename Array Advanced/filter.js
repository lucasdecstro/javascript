// filter vai sempre retornar um array com a mesma quantidade de elementos ou menos

const numeros = [4, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const acimaDe10 = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    acimaDe10.push(numeros[i]);
  }
}

console.log(acimaDe10);

// function callbackFilter(valor) {
//   //   if (valor > 10) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   return valor > 10;
// }

const numerosFiltrados = numeros.filter((valor) => {
  return valor > 10;
});
console.log(numerosFiltrados);

const pessoas = [
  { nome: "Lucas", idade: 23 },
  { nome: "Nil", idade: 51 },
  { nome: "Israel", idade: 50 },
  { nome: "Nelson", idade: 76 },
  { nome: "Nadir", idade: 69 },
  { nome: "Maria", idade: 76 },
  { nome: "Ana", idade: 123 },
];

const pessoasGrande = pessoas.filter((obj) => {
  return obj.nome.length >= 5;
});
console.log(pessoasGrande);

const pessoasVelhas = pessoas.filter((obj) => {
  return obj.idade >= 50;
});
console.log(pessoasVelhas);

const terminaA = pessoas.filter((obj) => {
  return obj.nome.toLowerCase().endsWith("a");
});
console.log(terminaA);
