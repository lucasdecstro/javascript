const numeros = [4, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor, indice, array) => {
  //   acumulador += valor;
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);

console.log(total);

const pessoas = [
  { nome: "Lucas", idade: 23 },
  { nome: "Nil", idade: 51 },
  { nome: "Israel", idade: 50 },
  { nome: "Nelson", idade: 76 },
  { nome: "Nadir", idade: 69 },
  { nome: "Maria", idade: 76 },
  { nome: "Ana", idade: 123 },
];

const idoso = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(idoso);
