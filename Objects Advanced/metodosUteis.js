const produto = {
  nome: "Produto",
  preco: 1.8,
};

// const caneca = Object.assign({}, produto, { material: "porcelana" });

// const caneca = { nome: produto.nome, preco: produto.preco };

// Object.freeze(produto);

// const outraCoisa = { ...produto, material: "porcelana" };

// caneca.nome = "Lucas";
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

Object.defineProperty(produto, "nome", {
  writable: false,
  configurable: false,
  value: "Qualquer coisa",
});

// console.log(Object.getOwnPropertyDescriptor(produto, "nome"));

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}

// console.log(Object.values(produto)); // .entries
