// defineProperty - ies

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: false, // pode alterar
    configurable: false, // configurável
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true,
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}
