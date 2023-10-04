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
