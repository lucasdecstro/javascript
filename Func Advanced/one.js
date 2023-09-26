// Declaração de função
falaOI();

function falaOI() {
  console.log("Oi");
}

// First-class obejcts (Objetos de primeira classe)
// Function expression

const souUmDado = function () {
  console.log("Sou um dado.");
};

// souUmDado();

function executaFuncao(funcao) {
  funcao();
}

executaFuncao(souUmDado);

// Arrow function

const arrowFunction = () => {
  console.log("Sou uma arrow function");
};

arrowFunction();

// Dentro de um objeto

const obj = {
  falar() {
    console.log("Estou falando...");
  },
};

obj.falar();
