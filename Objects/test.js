const pessoa = {
  //   nome: "Lucas",
  sobrenome: "Castro",
  idade: 23,
  endereco: {
    rua: "Avenida Brasil",
    numero: 999,
  },
};

const {
  nome: test = "E.T. Bilu",
  sobrenome,
  idade,
  endereco: test2 = { rua, numero },
  ...resto
} = pessoa;
console.log(test, sobrenome, idade, test2, resto);
