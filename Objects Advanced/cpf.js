// function validarCPF(cpf) {
//   const cleanCPF = cpf.replace(/[^\d]/g, "");

//   if (cleanCPF.length !== 11 || /^(\d)\1{10}$/.test(cleanCPF)) {
//     return false;
//   }

//   let soma = 0;

//   for (let i = 0; i < 9; i++) {
//     soma += parseInt(cleanCPF.charAt(i)) * (10 - i);
//   }

//   let digito1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

//   if (digito1 !== parseInt(cleanCPF.charAt(9))) {
//     return false;
//   }

//   soma = 0;

//   for (let i = 0; i < 10; i++) {
//     soma += parseInt(cleanCPF.charAt(i)) * (11 - i);
//   }

//   let digito2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

//   return digito2 === parseInt(cleanCPF.charAt(10));
// }

// const cpf1 = "458.477.198-76";

// console.log(validarCPF(cpf1));

function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criarDigito(cpfParcial);
  const digito2 = this.criarDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;
  console.log(novoCpf);

  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criarDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    // console.log(regressivo, typeof val, regressivo * val);
    ac += regressivo * Number(val);
    regressivo--;
    return ac;
  }, 0);
  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF("458.477.198-76");
console.log(cpf.valida());
// cpf.valida();
