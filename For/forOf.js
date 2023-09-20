const nomes = ["John", "Jane", "Mike"];

// for clássico = geralmente com iteráveis (array ou strings)
// for in = retorna o índice ou chave (strin, array ou objetos)
// for of = retorna o valor em si (iterávies, arrays ou strings)

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// for (let i in nome) {
//   console.log(nome[i]);
// }

// for (let i of nome) {
//   console.log(i);
// }

nomes.forEach(function (el, i, arr) {
  console.log(el, i, arr);
});
