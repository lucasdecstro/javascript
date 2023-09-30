const numeros = [4, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobro = numeros.map((valor) => {
  return valor * 2;
});

console.log(dobro);

const pessoas = [
  { nome: "Lucas", idade: 23 },
  { nome: "Nil", idade: 51 },
  { nome: "Israel", idade: 50 },
  { nome: "Nelson", idade: 76 },
  { nome: "Nadir", idade: 69 },
  { nome: "Maria", idade: 76 },
  { nome: "Ana", idade: 123 },
];

const retornaString = pessoas.map((value) => {
  return value.nome;
});

console.log(retornaString);

const removeNome = pessoas.map((obj) => {
  return { idade: obj.idade };
});

console.log(removeNome);

const withIds = pessoas.map((obj) => {
  const newObj = { ...obj };
  newObj.id = Math.floor(Math.random() * 1000) + 1;
  return newObj;
});

console.log(pessoas);
console.log(withIds);
