function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Bad value");
        return;
      }

      resolve(msg.toUpperCase() + " - passei na promise");
      return;
    }, tempo);
  });
}

// Promise all, race, resolve, reject

const promises = [
  //   "Primeiro valor",
  esperaAi("Promise 1", aleatorio(1, 5)),
  esperaAi("Promise 2", aleatorio(1, 5)),
  esperaAi("Promise 3", aleatorio(1, 5)),
  esperaAi(1000, aleatorio(1, 5)),
  //   "Outro",
];

// Promise.all(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

// function baixaPagina() {
//   const emCache = true;

//   if (emCache) {
//     return Promise.resolve("Em cache!");
//   } else {
//     return esperaAi("Baixei a página", 2000);
//   }
// }

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Em cache!");
  } else {
    return esperaAi("Baixei a página", 2000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log("Error!", e));
