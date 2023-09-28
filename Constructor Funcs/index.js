// factory e constructor -> objetos
// construtor -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  //   Privados
  const ID = 123;

  const metodoIntero = () => {};

  // Públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ": sou um método");
  };
}

const p1 = new Pessoa("Lucas", "Castro");
const p2 = new Pessoa("Israel", "Castro");
p1.metodo();
