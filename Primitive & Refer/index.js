/*
 * Primitivos = string, number, boolean, undefined, null (bigInt, symbol) - valores copiados
 
 * Referência(mutável) = array, oject, function - passados por referência
 */

//          01234

// let nome = "Lucas";
// nome = "Castro";
// console.log(nome[0]);

// let a = "aqui";
// let b = a; // copy
// console.log(a, b);

// a = "Outra coisa";
// console.log(a, b);

// let a = [1, 2, 3];
// let b = [...a]; // independente
// console.log(a, b);

// a.push(4);
// console.log(a, b); // apontam para o mesmo valor na memória

const a = {
  nome: "Lucas",
  sobrenome: "Castro",
};

const b = { ...a };

a.nome = "João";
console.log(a);
console.log(b);
