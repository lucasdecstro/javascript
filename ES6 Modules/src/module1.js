const nome = "Lucas";
const sobrenome = "Castro";
const idade = 23;

function soma(x, y) {
  return x + y;
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

export default (x, y) => x * y;

export { nome /* as default */, sobrenome, idade, soma };

// export { nome, sobrenome, idade, soma };
