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

// esperaAi("Fase 1", aleatorio(0, 3))
//   .then((valor) => {
//     console.log(valor);
//     return esperaAi("Fase 2", aleatorio(0, 3));
//   })
//   .then((fase) => {
//     console.log(fase);
//     return esperaAi("Fase 3", aleatorio(0, 3));
//   })
//   .then((fase) => {
//     console.log(fase);
//     return fase;
//   })
//   .then((fase) => {
//     console.log("End -", fase);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

async function executa() {
  try {
    const fase1 = esperaAi("Fase 1", 1000);
    console.log(fase1);

    setTimeout(function () {
      console.log("Teste", fase1);
    }, 1100);

    const fase2 = await esperaAi(1, aleatorio(0, 3));
    console.log(fase2);

    const fase3 = await esperaAi("Fase 3", aleatorio(0, 3));
    console.log("End", fase3);
  } catch (e) {
    console.log(e);
  }
}

// executa();

// Pending
const testing = esperaAi("Opa", 3000);
console.log(testing);

// pending -> pendente
// fullfilled -> resolvida
// reject -> rejeitada
