class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando.`);
};

const p1 = new Pessoa("Lucas", "Castro");
const p2 = new Pessoa2("Nil", "Castro");
// const p3 = new Pessoa("Israel", "Castro");
// const p4 = new Pessoa("Maria", "Castro");
console.log(p2.falar());
