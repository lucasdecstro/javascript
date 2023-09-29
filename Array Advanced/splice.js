const nomes = ["Maria", "João", "Lucas", "Ana", "Gabriel"];

// nomes.splice(índice, delete, add...);
// const removidos = nomes.splice(-2, Number.MAX_VALUE);
// const removidos = nomes.splice(3, 2);
// const removidos = nomes.splice(3, 1, "Pedro");

// shift
// const removidos = nomes.splice(0, 1);

// push
// nomes.splice(nomes.length, 0, "Opa");

// unshift
nomes.splice(0, 0, "Teste", "Teste");
console.log(nomes);
