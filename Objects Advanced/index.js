// const pessoa = {
//   nome: "Lucas",
//   sobrenome: "Castro",
// };

// const chave = "nome";
// console.log(pessoa[chave]);

// const pessoa1 = new Object();
// pessoa1.nome = "Lucas";
// pessoa1.sobrenome = "Castro";
// pessoa1.idade = 23;

// pessoa1.falarNome = function () {
//   console.log(`${this.nome} está falando seu nome.`);
// };

// pessoa1.getDataNascimento = function () {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// };

// for (let chave in pessoa1) {
//   console.log(pessoa1[chave]);
// }

// delete pessoa1.nome;

// pessoa1.falarNome();

// Factory functions - Constructor functions - classes

// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     },
//   };
// }

// const p1 = criaPessoa("Lucas", "Castro");
// console.log(p1.nomeCompleto());

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
  // return this;
}

// new -> {} - this -> this
const p1 = new Pessoa("Lucas", "Castro");
Object.freeze(p1);
p1.nome = "Opa";

console.log(p1);
