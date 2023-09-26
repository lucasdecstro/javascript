// IIFE => Immediately invoked function expression

// qualquerCoisa = () => {
//   console.dir(123);
// };

// qualquerCoisa();

// (function () {
//   const nome = "Lucas";
//   console.log(nome);
// })();

// const nome = "A";

((idade, peso, altura) => {
  const sobrenome = "Castro";

  criaNome = (nome) => {
    return nome + " " + sobrenome;
  };

  falaNome = () => {
    console.dir(criaNome("Lucas"));
  };

  falaNome();
  console.log(idade, peso, altura);
})(23, 75, 1.75);

(() => {})(); 
