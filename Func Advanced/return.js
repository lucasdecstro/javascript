function soma(a, b) {
  return a + b;
}

console.log(soma(2, 5));

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}

const p1 = criaPessoa("Luiz", "Castro");

console.log(typeof p1);

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase("Opa");
console.log(olaMundo("meu caro!"));

// function duplica(n) {
//   return n * 2;
// }

// function triplica(n) {
//   return n * 3;
// }

// function quadruplica(n) {
//   return n * 4;
// }

function criaMultiplicador(multiplicador) {
  return (n) => {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));
