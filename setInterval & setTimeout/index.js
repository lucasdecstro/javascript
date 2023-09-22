function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-br", {});
}

// function funcaoInterval() {
//   console.log(mostraHora());
// }

const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 3000);

setTimeout(() => {
  console.log("Salve meu caro!");
}, 3000);
