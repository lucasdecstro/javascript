// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);

// const data = new Date("2019-04-18 20:23:46");

// console.log("Dia", data.getDate());
// console.log("Mês", data.getMonth());
// console.log("Ano", data.getFullYear());
// console.log("Hora", data.getHours());
// console.log("Min", data.getMinutes());
// console.log("Seg", data.getSeconds());
// console.log("ms", data.getMilliseconds());
// console.log("Dia semana", data.getDay());
// console.log(data.toString());
// console.log(Date.now());

function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatDate(data) {
  const day = zeroLeft(data.getDate());
  const month = zeroLeft(data.getMonth() + 1);
  const year = zeroLeft(data.getFullYear());
  const hour = zeroLeft(data.getHours());
  const min = zeroLeft(data.getMinutes());
  const seg = zeroLeft(data.getSeconds());

  return `${day}/${month}/${year} ${hour}:${min}:${seg}`;
}

const data = new Date();
const dateBrazil = formatDate(data);
console.log(dateBrazil);
