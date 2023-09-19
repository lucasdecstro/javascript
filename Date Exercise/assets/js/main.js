// function attDateHour() {
//   const now = new Date();

//   const optionsDate = {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//   };

//   const dateString = now
//     .toLocaleDateString("pt-br", optionsDate)
//     .split("/")
//     .join("-");

//   const optionsTime = {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "numeric",
//   };

//   const timeString = now.toLocaleTimeString("pt-BR", optionsTime);

//   document.querySelector("#getDate").innerHTML = "Data: " + dateString;
//   document.querySelector("#getTime").innerHTML = "Hora: " + timeString;
// }

// setInterval(attDateHour, 1000);

// const data = new Date();
// document.querySelector("#test").innerHTML = data.toLocaleDateString("pt-br", {
//   dateStyle: "full",
//   timeStyle: "short",
// });

function attDateHour() {
  const today = new Date();

  const dateString = new Intl.DateTimeFormat("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(today);

  const timeString = new Intl.DateTimeFormat("pt-br", {
    hour: "2-digit",
    minute: "2-digit",
    second: "numeric",
  }).format(today);

  const dayOfWeek = new Intl.DateTimeFormat("pt-br", {
    weekday: "long",
  }).format(today);

  document.querySelector("#getDate").innerHTML =
    "Data: " + dayOfWeek + ", " + dateString;
  document.querySelector("#getTime").innerHTML = "Hora: " + timeString;
}

setInterval(attDateHour, 1000);
