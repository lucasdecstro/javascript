const pessoas = [
  { id: 3, nome: "Lucas" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "João" },
];

// const novasPessoas = {};

// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();

for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

// for (const /* pessoa */ [identifier, { id, nome }] of novasPessoas) {
//   console.log(identifier, id, nome);
// }

novasPessoas.delete(2);
console.log(novasPessoas);

// console.log(novasPessoas.get(2));
