// Argumentos que sustenta todos os argumentos enviados

// function funcao() {
//   let total = 0;

//   for (argumento of arguments) {
//     total += argumento;
//   }

//   console.log(total);
// }

// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao(a, b = 2, c = 4) {
//   //   b = b || 0;
//   console.log(a + b + c);
// }

// funcao(2, undefined, 20);

// function funcao({ nome, sobrenome, idade }) {
//   console.log(nome, sobrenome, idade);
// }

// let obj = { nome: "Lucas", sobrenome: "Castro", idade: 23 };
// funcao(obj);

const conta = (operador, acumulador, ...numeros) => {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;
  }
  console.log(acumulador);
};

conta("*", 1, 20, 30, 40, 50);

// "Não há arguments em arrow functions"
