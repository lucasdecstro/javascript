// import { nome as nome2, sobrenome, idade, soma, Pessoa } from "./module1";

// import * as MyModule from "./module1";

import qualquerNome, { nome, sobrenome, idade, soma } from "./module1";

// const nome = "João";

// console.log(nome, nome2, sobrenome, idade);
// console.log(soma(5, 7));

// const p1 = new Pessoa("Lucas", "Castro");
// console.log(p1);

console.log(qualquerNome(1, 5));
console.log(nome, sobrenome, idade, soma(3, 7));
