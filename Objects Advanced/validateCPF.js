function validarCPF(cpf) {
  const limparCPF = cpf.replace(/\D/g, "");

  if (limparCPF.length !== 11 || /^(\d)\1{10}$/.test(limparCPF)) {
    return false;
  }

  let soma = 0;

  for (let i = 0; i < 9; i++) {
    soma += +limparCPF[i] * (10 - i);
  }

  const digito1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (digito1 !== +limparCPF[9]) {
    return false;
  }

  soma = 0;

  for (let i = 0; i < 10; i++) {
    soma += +limparCPF[i] * (11 - i);
  }

  const digito2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  return digito2 === +limparCPF[10];
}

const cpf = "458.477.198-76";

console.log(validarCPF(cpf));
