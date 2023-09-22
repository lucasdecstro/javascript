relogio = () => {
  criaHoraDosSegundos = (segundos) => {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  };

  const relogio = document.querySelector(".relogio");

  let segundos = 0;
  let timer;

  iniciaRelogio = () => {
    timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  };

  document.addEventListener("click", (e) => {
    const el = e.target;

    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }

    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      relogio.classList.remove("pausado");
      segundos = 0;
    }
  });
};

relogio();

// iniciar.addEventListener("click", () => {
//   relogio.classList.remove("pausado");
//   clearInterval(timer);
//   iniciarRelogio();
// });

// pausar.addEventListener("click", () => {
//   clearInterval(timer);
//   relogio.classList.add("pausado");
// });

// zerar.addEventListener("click", () => {
//   clearInterval(timer);
//   relogio.innerHTML = "00:00:00";
//   segundos = 0;
// });