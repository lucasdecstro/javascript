const falar = {
  falar() {
    console.log(`${this.nome} está falando!`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo!`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo!`);
  },
};

const pessoaProto = { ...falar, ...comer, ...beber }; // Object.assign({}, falar, comer, beber)

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaProto, {
    nome: { value: nome },
    sobrenome: { sobrenome: sobrenome },
  });
}

const p1 = criaPessoa("Lucas", "Castro");
const p2 = criaPessoa("Maria", "Castro");
console.log(p1.falar());
console.log(p2.beber());
