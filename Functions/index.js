// function saudacao(nome) {
//   return `Bom dia, ${nome}!`;
// }

// const variavel = saudacao("Lucas");
// console.log(variavel);

// function soma(x = 1, y = 1) {
//   const resultado = x + y;
//   return resultado;
// }

// console.log(soma(1, 4));
// const resultado = soma(2, 2);
// console.log(resultado);

// const raiz = function (n) {
//   return n ** 0.5;
// }; // anônima precisa de ;

// console.log(raiz(9));

const raiz = (n) => {
  return n ** 0.5;
};

// const raiz = n => n ** 0.5; // simplificação

console.log(raiz(16));
