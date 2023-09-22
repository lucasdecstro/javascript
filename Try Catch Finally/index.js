// try {
//   // Quando não há erros
//   console.log("Abri um arquivo");
//   console.log("Manipulei o arquivo e gerou erro");
//   console.log("Fechei o arquivo");
// } catch {
//   // Quando há erros
//   console.log("Tratando o erro");
// } finally {
//   // Sempre
//   console.log("Eu sempre sou executado");
// }

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-br", {
    // hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 13:32:00");

  const hora = retornaHora();
  console.log(hora);
} catch (err) {
  console.log("Error.");
} finally {
  console.log("Opa.");
}
