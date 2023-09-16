// Operadores lógicos:

// && -> AND -> Todas precisam ser verdadeiras para retornar true.
// || -> OR -> Apenas uma precisa ser verdadeira.
// ! -> NOT

const expressaoAnd = true && true && false && true;
const expressaoOr = true || true || false;
console.log(expressaoOr);

const usuario = "Lucas"; // form
const senha = "123"; // form

const vaiLogar = usuario === "Lucas" && senha === "123";
console.log(vaiLogar);

// console.log(!false); -> false !! -> true