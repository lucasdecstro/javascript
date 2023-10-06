// function aleatorio(min, max) {
//   min *= 1000;
//   max *= 1000;
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo, cb) {
//   setTimeout(() => {
//     console.log(msg);
//     if (cb) cb();
//   }, tempo);
// }

// esperaAi("Frase 1", aleatorio(1, 3), function () {
//   esperaAi("Frase 2", aleatorio(1, 3), function () {
//     esperaAi("Frase 3", aleatorio(1, 3));
//   });
// });

function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Bad value");

    setTimeout(() => {
      //   console.log(msg);
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Conectando", aleatorio(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados...", aleatorio(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(123, aleatorio(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Dados");
  })
  .catch((e) => {
    console.log("Erro", e);
  });
