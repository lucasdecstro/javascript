function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //   this.nomeCompleto = () => {
  //     this.nome + " " + this.sobrenome;
  //   };
}

// Pessoa.prototype === pessoa1.__proto__;

// Pessoa.prototype.opa = "Opa";
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const pessoa1 = new Pessoa("Lucas", "C."); // <- Constructor function
const pessoa2 = new Pessoa("Maria", "A."); // <- Constructor function
const data = new Date(); // <- Date = Constructor function

console.log(pessoa1);
console.log(pessoa2);
console.log(data);
