const ePaisagem = (l, a) =>
  typeof l === "number" && typeof a === "number" && l > a;

console.log(ePaisagem(6, 1));

// function ePaisagem(l, a) {
//   return l > a ? true : false;
// }

// console.log(ePaisagem(1920, 1080));
