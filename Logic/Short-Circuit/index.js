// && -> false && true -> false "o valor mesmo"
// || -> true || false -> true "o valor verdadeiro"

// FALSY
// false
// 0
// '' "" ``
// null / undefined
// NaN

// function falaOi() {
//   return "Oi";
// }

// const vaiExecutar = undefined; // "Lucas" -> Oi

// console.log(vaiExecutar && falaOi());

// console.log("Lucas" && 0 && "Nil"); -> 0

// const corUsuario = null; // red -> red
// const corPadrao = corUsuario || "preto";

// console.log(corPadrao);

const a = 0;
const b = null;
const c = "false";
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
