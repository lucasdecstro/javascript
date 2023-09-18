// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 100;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "VIP" : "Normal";

const corUsuario = 'Pink';
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 100) {
//   console.log("VIP");
// } else {
//   console.log("Normal");
// }
