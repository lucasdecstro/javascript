// const array = [1, 2, 3]; // não posso reatribuir

// array.push(4);
// array[0] = "Lucas";
// console.log(array);

// const nome01 = "Lucas";
// const sobrenome01 = "Castro";
// const idade01 = 23;

// const nome02 = "Israel";
// const sobrenome02 = "Castro";
// const idade02 = 50;

// const pessoa1 = {
//   nome: "Lucas",
//   sobrenome: "Castro",
//   idade: 23,
// }; // objeto literal

// console.log(pessoa1.nome);

// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome,
//     sobrenome,
//     idade,
//   };
// }

// Argumento é o valor passado para o parâmetro

// const pessoa1 = criaPessoa("Lucas", "Castro", 25);
// console.log(pessoa1.nome);

const pessoa1 = {
  nome: "Lucas",
  sobrenome: "Antunes",
  idade: 23,

  fala() {
    console.log(`A minha idade atual é ${this.idade}!`);
  }, // this representa este objeto

  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
