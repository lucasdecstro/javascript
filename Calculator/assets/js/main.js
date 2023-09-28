// function criaCalculadora() {
//   return {
//     display: document.querySelector(".display"),

//     inicia() {
//       this.cliqueBotoes();
//       this.pressionaBackSpace();
//       this.pressionaEnter();
//     },

//     pressionaBackSpace() {
//       this.display.addEventListener("keydown", (e) => {
//         if (e.keyCode === 8) {
//           e.preventDefault();
//           this.clearDisplay();
//         }
//       });
//     },

//     pressionaEnter() {
//       this.display.addEventListener("keyup", (e) => {
//         if (e.keyCode === 13) {
//           this.realizaConta();
//         }
//       });
//     },

//     realizaConta() {
//       let conta = this.display.value;

//       try {
//         conta = eval(conta);

//         if (!conta) {
//           alert("Conta inválida");
//           return;
//         }

//         this.display.value = String(conta);
//       } catch (e) {
//         alert("Conta inválida");
//         return;
//       }
//     },

//     clearDisplay() {
//       this.display.value = "";
//     },

//     apagaUm() {
//       this.display.value = this.display.value.slice(0, -1);
//     },

//     cliqueBotoes() {
//       document.addEventListener("click", (e) => {
//         const el = e.target;

//         if (el.classList.contains("btn-num")) {
//           this.btnParaDisplay(el.innerText);
//         }

//         if (el.classList.contains("btn-clear")) {
//           this.clearDisplay();
//         }

//         if (el.classList.contains("btn-del")) {
//           this.apagaUm();
//         }

//         if (el.classList.contains("btn-eq")) {
//           this.realizaConta();
//         }

//         this.display.focus();
//       });
//     },

//     btnParaDisplay(valor) {
//       this.display.value += valor;
//     },
//   };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();

function Calculadora() {
  this.display = document.querySelector(".display");

  this.capturaCliques = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del(el);
      if (el.classList.contains("btn-eq")) this.realizaConta(el);
    });
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => {
    this.display.value = "";
  };

  this.del = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.realizaConta();
    });
  };

  this.realizaConta = () => {
    const expressao = this.display.value;

    try {
      let resultado = eval(expressao);

      if (isNaN(resultado) || !isFinite(resultado)) {
        alert("Conta inválida");
        this.clear();
        return;
      }

      this.display.value = String(resultado.toFixed(2));
    } catch {
      console.error("Ocorreu um erro ao avaliar a expressão.", error);
      alert("Conta inválida");
      this.clear();
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
